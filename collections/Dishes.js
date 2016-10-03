import {Mongo} from 'meteor/mongo';
// import {SimpleSchema} from 'meteor/aldeed:simple-schema'
import Text from 'simple-react-form-material-ui/lib/text'
// import toggle from 'simple-react-form-material-ui/lib/toggle'
import select from 'simple-react-form-material-ui/lib/select'
import {SimpleSchema} from 'meteor/aldeed:simple-schema'
import {Match} from 'meteor/check';
 SimpleSchema.extendOptions({
  srf: Match.Optional(Object),
  mrf: Match.Optional(Object),
})

const Dishes= new Mongo.Collection('dish');
const DishSchema = new SimpleSchema({
	name:{
		type: String,
		label:'Nombre del plato',
		srf:{
			type:Text
		}

	},	
	desc:{
		type: String,
		label:'Descripción', 
		srf:{
			type:Text
		}
	},  
	type: {
    type: String,
    label: 'Tipo ',
    mrf: {
      type: 'select',
      options: [
        { label: 'Entrada', value: 'starter' },
        { label: 'Principal', value: 'main' },   
        { label: 'Postre', value: 'dessert' },
      ]
    }
   }//,
  // activo:{
  // 	type:Boolean,
  // 	label:"activo",
  // 	mrf:{
  // 		type:"toggle"
  // 	}
  // }
})
Dishes.attachSchema(DishSchema);
export default Dishes;

