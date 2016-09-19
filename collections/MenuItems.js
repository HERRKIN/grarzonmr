import {Mongo} from 'meteor/mongo';
// import {SimpleSchema} from 'meteor/aldeed:simple-schema'
import Text from 'simple-react-form-material-ui/lib/text'
import {SimpleSchema} from 'meteor/aldeed:simple-schema'
import {Match} from 'meteor/check';
 SimpleSchema.extendOptions({
  srf: Match.Optional(Object)
})

const MenuItems= new Mongo.Collection('menuitem');
const MenuItemSchema = new SimpleSchema({
	name:{
		type: String,
		label:'name',
		srf:{
			type:Text
		}

	},	
	desc:{
		type: String,
		label:'description', 
		srf:{
			type:Text
		}
	}
})
MenuItems.attachSchema(MenuItemSchema);
export default MenuItems;

