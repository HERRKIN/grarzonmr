import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React from 'react'
import {Form} from 'simple-react-form'
import MenuItems from '../../collections/MenuItems.js'
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { browserHistory } from 'react-router'


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
      <div className="Menu">
        <h1>editar Plato</h1>
        <Form
        collection={MenuItems}
        type='update'
        ref='form'
        clearOnSuccess={false}
        doc={this.props.MenuItem}
        onSuccess={()=>browserHistory.push('/menu')}
        />
        <RaisedButton label='Guardar' primary={true} onTouchTap={() => this.refs.form.submit()}/> 
        <RaisedButton label='Cancelar'  style={style} onTouchTap={()=> browserHistory.goBack()}/> 
        {/*
        <p>{this.props.params.plato}</p>
        */}
      </div>
    )
  }
}

export default createContainer(({params}) => {
  const {plato} = params
  // Meteor.subscribe('MenuList')
  const MenuItem = MenuItems.findOne(plato);
  return { MenuItem}
}, MenuItemUpdate)