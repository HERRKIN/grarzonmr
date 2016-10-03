
import React from 'react'



export default class TypeItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

    render() {
    	
        return <h1>{this.props.tipo}</h1>;
    }
}



