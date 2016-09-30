import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Match} from 'meteor/check'; 
SimpleSchema.extendOptions({
  srf: Match.Optional(Object),
  mrf: Match.Optional(Object),
})

const Orders = new Mongo.Collection('order');
const OrdersSchema = new SimpleSchema({
	starter:{
		type:String,
		label:'Entrada',
	},
	main:{
		type:String,
		label:'Principal',
	},
	dessert:{
		type:String,
		label:'Postre'
	},
	customer:{
		type:String,
		label:'Comensal',
	}
});
Orders.attachSchema(OrdersSchema);
export default Orders;