// modules/Home.js
import React from 'react'
import Paper from 'material-ui/Paper';
import MenuItemInsert from './MenuItemInsert'
import NavLink from './NavLink.jsx';
import Dishes from '../../collections/Dishes.js'
import Orders from '../../collections/Orders.js'
import { createContainer } from 'meteor/react-meteor-data'
import OrderDishes from './orders/OrderDishes';
class Home extends React.Component{

renderOrders(items){

	let orderItems = []

   items.forEach(o=>{
   			let  dishItems = {}
   			this.props.dishes.forEach((d)=>{
			        if(d._id===o.starter||d._id===o.main||d._id===o.dessert)
			        	dishItems[d.type]=d.name
			 })
			console.log(dishItems)
			dishItems.result=<OrderDishes order = {dishItems}/>




        	orderItems.push(<Paper zDepth={1} className="order" key={o._id}>
        				<p><b>Etiqueta:</b> {o._id}</p>
			        	<div className="OrderDishes">
			        	{dishItems.result}
			        	</div>
			        	<div className="OrderCustomer"><b>nombre:</b>{o.customer}</div>
        	</Paper>)
        })
   return orderItems

}





  render() {
    return <div> <div className="homeactions">
    	<NavLink to="/menu" activeClassName="active">Configurar Menu</NavLink><br/>
    	{this.props.dishes.length?<NavLink to="/take-order" activeClassName="active">Tomar Orden</NavLink>:''}
    	</div>
        <h1 className="orderP">Pedidos</h1>

        {this.props.orders.length?this.renderOrders(this.props.orders):<p>No hay pedidos</p>}
       </div> 
  }
}


export default createContainer(() => {
  // Meteor.subscribe('Pedidos')
  const orders = Orders.find().fetch()
  const dishes = Dishes.find().fetch()
  return { orders, dishes}
}, Home)