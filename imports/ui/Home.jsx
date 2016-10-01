// modules/Home.js
import React from 'react'
import Paper from 'material-ui/Paper';
import MenuItemInsert from './MenuItemInsert'
import NavLink from './NavLink.jsx';


export default class Home extends React.Component{
  render() {
    return  <Paper zDepth={1}>
    	<NavLink to="/menu" activeClassName="active">Configurar Menu</NavLink><br/>
    	<NavLink to="/take-order" activeClassName="active">Tomar Orden</NavLink>
        <p>aqui van los pedidos..</p>
    </Paper>
  }
}