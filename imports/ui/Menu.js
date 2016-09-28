import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import MenuItems from '../../collections/MenuItems.js'
import MenuItem from './MenuItem.js';
import React from 'react'
import { browserHistory } from 'react-router'

import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add';

import TipoItem from './TipoItem.js';

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

 renderEmpty (tipo) {
    return (<div>
      <h2 key={tipo.toLowerCase()}>{tipo}</h2>
      <h3>Hoy no tenemos {tipo}</h3>
    </div>)
  }

renderItems(tipo){

  // console.log(this.props.items)
  let last = '';

var items =[];
items.push(<h2 key={tipo.toLowerCase()}>{tipo}</h2>)
   this.props[tipo.toLowerCase()].forEach((i, index)=>{
 
    // if(i.tipo!==last){
    //   items.push(<TipoItem tipo = {i.tipo} key = {last}/>);
    //   last = i.tipo;
    // } 
    
    items.push(<MenuItem item={i} key={i._id} onDelete={this.deleteItem.bind(this)}/>);
    
  })
   // console.log(items)
  return items
}

  deleteItem(item){
    console.log(`borrando ${item}`)
    MenuItems.remove(item)
  }

    render() {
        return (<div> 
        <h1>Menu</h1>
        <div>
        {this.props.entradas.length? this.renderItems("Entradas") :this.renderEmpty("Entradas")}
        </div>
        <div>
        {this.props.principales.length? this.renderItems("Principales"):this.renderEmpty("Principales") }
        </div>
        <div>
        {this.props.postres.length? this.renderItems("Postres"):this.renderEmpty("Postres")}
        </div>

 <FloatingActionButton mini={true} secondary={true} style={style} onTouchTap={()=>browserHistory.push('/menu/new')}>
      <ContentAdd />
    </FloatingActionButton>
        </div>)
    }
}



export default createContainer(() => {
  // Meteor.subscribe('MenuList')
  const entradas = MenuItems.find({ 'tipo' : 'Entrada' }).fetch()
  const principales = MenuItems.find({ 'tipo' : 'Principal' }).fetch()
  const postres = MenuItems.find({ 'tipo' : 'Postre' }).fetch()
  return { entradas , principales, postres}
}, Menu)