import React from 'react'
import { Link } from 'react-router'



export default class MenuItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

    render() {
    	console.log(this.props.item)
      let url= `/updateplato/${this.props.item._id}`
      console.log(url)
        return <div className="item"><p><b>Nombre</b> {this.props.item.name}</p>
          <p><b>Descripcion:</b> {this.props.item.desc}</p>
          <Link to={url}>Editar</Link>
       
          
    </div>;
    }
}



