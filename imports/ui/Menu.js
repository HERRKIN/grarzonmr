import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import Dishes from '../../collections/Dishes.js'
import MenuItem from './MenuItem.js';
import React from 'react'
import { browserHistory } from 'react-router'

import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add';

import TypeItem from './TypeItem.js';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};



class Menu extends React.Component {





constructor (props) {
    super(props)
    this.state = {}
  }

 renderEmpty (type) {
    return (<div>
      <h2 key={type.toLowerCase()}>{type}</h2>
      <h3>Hoy no tenemos {type}</h3>
    </div>)
  }

renderItems(type){

  // console.log(this.props.items)
  let last = '';

var items =[];
items.push(<h2 key={type.toLowerCase()}>{type}</h2>)
   this.props[type.toLowerCase()].forEach((i, index)=>{
 
    // if(i.type!==last){
    //   items.push(<TypeItem type = {i.type} key = {last}/>);
    //   last = i.type;
    // } 
    
    items.push(<MenuItem item={i} key={i._id} onDelete={this.deleteItem.bind(this)}/>);
    
  })
   // console.log(items)
  return items
}

  deleteItem(item){
    console.log(`borrando ${item}`)
    Dishes.remove(item)
  }

    render() {
        return (<div> 
        <h1>Menu</h1>
        <Paper zDepth={1} >
        {this.props.entradas.length? this.renderItems("Entradas") :this.renderEmpty("Entradas")}
        </Paper>
        
        <Paper zDepth={1} >
        {this.props.principales.length? this.renderItems("Principales"):this.renderEmpty("Principales") }
        
        </Paper>
        
        <Paper zDepth={1} >
        {this.props.postres.length? this.renderItems("Postres"):this.renderEmpty("Postres")}
        </Paper>
        

 <FloatingActionButton secondary={true} style={style} onTouchTap={()=>browserHistory.push('/menu/new')}>
      <ContentAdd />
    </FloatingActionButton>
        </div>)
    }
}



export default createContainer(() => {
  // Meteor.subscribe('MenuList')
  const entradas = Dishes.find({ 'type' : 'starter' }).fetch()
  const principales = Dishes.find({ 'type' : 'main' }).fetch()
  const postres = Dishes.find({ 'type' : 'dessert' }).fetch()
  return { entradas , principales, postres}
}, Menu)