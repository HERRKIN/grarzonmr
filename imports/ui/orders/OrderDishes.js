import React from 'react';

export default class OrderDishes extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <div>
        	<div ><b>Entrada</b>: {this.props.order.starter}</div>
        	<div ><b>Principal</b>: {this.props.order.main}</div>
        	<div ><b>Postre</b>: {this.props.order.dessert}</div>
        	</div>

    }
}


