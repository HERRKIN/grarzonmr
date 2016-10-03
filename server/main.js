import { Meteor } from 'meteor/meteor';
import MenuItems from '../collections/Dishes.js';
// import Orders from '../collections/Orders.js';
// import SimpleSchema from 'meteor/aldeed:simple-schema';
// import {Match} from 'meteor/check';

//  SimpleSchema.extendOptions({
//   srf: Match.Optional(Object)
// })
Meteor.startup(() => {
  // code to run on server at startup

});
// Meteor.publishComposite('Pedidos', {
//     find: function() {
//         // Find top ten highest scoring posts
//         return Orders.find({});
//     },
//     children: [
//         {
//             find: function(order) {

//                 return MenuItems.find(order.starter,order.main,order.dessert);
//             }
//         }
//     ]
// });