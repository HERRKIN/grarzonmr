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
  
export default class MenuItemsInsert extends React.Component {
	// submitHandler(){
	// 	this.ref.form.reset()
	// }

  render() {
    return (
      <div className="Menu">
        <h1>Nuevo Plato</h1>
        <Form
        collection={MenuItems}
        type='insert'
        ref='form'
        clearOnSuccess={false}
        onSuccess={()=>browserHistory.push('/menu')}
        />
        <RaisedButton label='Guardar' primary={true} onTouchTap={() => this.refs.form.submit()}/> 
        <RaisedButton label='Cancelar'  style={style} onTouchTap={()=>browserHistory.goBack()}/> 

      </div>
    )
  }
}