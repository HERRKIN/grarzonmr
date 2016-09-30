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

const MenuItems= new Mongo.Collection('menuitem');
const MenuItemSchema = new SimpleSchema({
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
	tipo: {
    type: String,
    label: 'Tipo ',
    mrf: {
      type: 'select',
      options: [
        { label: 'Entrada', value: 'Entrada' },
        { label: 'Principal', value: 'Principal' },   
        { label: 'Postre', value: 'Postre' },
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
MenuItems.attachSchema(MenuItemSchema);
export default MenuItems;

