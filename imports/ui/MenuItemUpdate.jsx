import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React from 'react'
import {Form} from 'simple-react-form'
import Dishes from '../../collections/Dishes.js'
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { browserHistory } from 'react-router'
import Paper from 'material-ui/Paper';


import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginLeft: 10,
};
  
export default class MenuItemUpdate extends React.Component {
	// submitHandler(){
	// 	this.ref.form.reset()
	// }

  render() {
    return (
      <Paper zDepth={1}className="Menu">
        <h1>editar Plato</h1>
        <Form
        collection={Dishes}
        type='update'
        ref='form'

        doc={this.props.MenuItem}
        onSuccess={()=>browserHistory.push('/menu')}
        />
        <RaisedButton label='Guardar' primary={true} onTouchTap={() => this.refs.form.submit()}/> 
        <RaisedButton label='Cancelar'  style={style} onTouchTap={()=> browserHistory.goBack()}/> 
        {/*
        <p>{this.props.params.plato}</p>
        */}
      </Paper>
    )
  }
}

export default createContainer(({params}) => {
  const {plato} = params
  // Meteor.subscribe('MenuList')
  const MenuItem = Dishes.findOne(plato);
  return { MenuItem}
}, MenuItemUpdate)