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
  
export default class DishesInsert extends React.Component {
	// submitHandler(){
	// 	this.ref.form.reset()
	// }

  render() {
    return (
      <Paper zDepth={1} className="Menu">
        <h2>Nuevo Plato</h2>
        <img className="typeImg" src="https://cdn1.iconfinder.com/data/icons/food-drinks-set-2/136/Plates-512.png"/>
        <Form
        collection={Dishes}
        type='insert'
        ref='form'
        onSuccess={()=>browserHistory.push('/menu')}
        />
        <RaisedButton label='Guardar' primary={true} onTouchTap={() => this.refs.form.submit()}/> 
        <RaisedButton label='Cancelar'  style={style} onTouchTap={()=>browserHistory.goBack()}/> 

      </Paper>
    )
  }
}