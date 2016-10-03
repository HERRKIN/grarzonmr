import React from 'react'
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { browserHistory } from 'react-router'
import Paper from 'material-ui/Paper';


export default class MenuItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  // delete (){
  //   console.log('fue clickeado')
  //   this.props.onDelete(this.props.item._id)
  // }
    render() {
    	console.log(this.props.item)
      let url= `/updateplato/${this.props.item._id}`
        return<Paper zDepth={1} className="menu-item"> 
        <div className="mi-data"> <p><b>Nombre</b> {this.props.item.name}</p>
          <p><b>Descripcion:</b> {this.props.item.desc}</p>
          </div>
          <div className="menu-item-actions">
            <IconButton tooltip="Editar" touch={true} tooltipPosition="top-left" onTouchTap={()=>browserHistory.push(url)} >
            <ImageEdit />
            </IconButton><br/>
            <IconButton tooltip="Eliminar" touch={true} tooltipPosition="top-left" onTouchTap={()=> this.props.onDelete(this.props.item._id)} >
            <ActionDelete />
            </IconButton >            

          </div>
    </Paper>;
    }
}



