
import React from 'react'



export default class MenuItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

    render() {
    	//console.log(this.props.item)
        return <div className="item"><p><b>Nombre</b> {this.props.item.name}</p>
          <p><b>Descripcion:</b> {this.props.item.desc}</p>
    </div>;
    }
}



