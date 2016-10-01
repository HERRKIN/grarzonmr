// modules/Home.js
import React from 'react'
import Paper from 'material-ui/Paper';
import MenuItemInsert from './MenuItemInsert'
import NavLink from './NavLink.jsx';
import MenuItems from '../../collections/MenuItems.js'
import Orders from '../../collections/Orders.js'
import { createContainer } from 'meteor/react-meteor-data'

class Home extends React.Component{

renderOrders(items){

	let orderItems = []

   items.forEach(o=>{
   			let  dishItems = []
   			this.props.dishes.forEach((d)=>{
			        if(d._id===o.starter||d._id===o.main||d._id===o.dessert)
			        	dishItems.push(<div key={d._id}><b>{d.tipo}</b>: {d.name}</div>)
			 })


        	orderItems.push(<Paper zDepth={1} className="order" key={o._id}>

			        	<div ><b>nombre:</b>{o.customer}</div>
			        	<div>
			        	{dishItems}
			        	</div>
        	</Paper>)
        })
   return orderItems

}





  render() {
    return <div> <div className="homeactions">
    	<NavLink to="/menu" activeClassName="active">Configurar Menu</NavLink><br/>
    	<NavLink to="/take-order" activeClassName="active">Tomar Orden</NavLink>
    	</div>
        <p className="orderP"><b>Pedidos</b></p>

        {this.props.orders.length?this.renderOrders(this.props.orders):<p>No hay pedidos</p>}
       </div> 
  }
}


export default createContainer(() => {
  // Meteor.subscribe('Pedidos')
  const orders = Orders.find().fetch()
  const dishes = MenuItems.find().fetch()
  return { orders, dishes}
}, Home)