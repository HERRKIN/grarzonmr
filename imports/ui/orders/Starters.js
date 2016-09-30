import React from 'react';

class Starters extends React.Component {
    constructor(props) {
        super(props);
        // this.displayName = 'Starters';
        this.setState({step:1})
    }

    renderStarters(){
    	let s = this.props.starters;
    	elements = [];
    	s.forEach((starter)=>{
    		elements.push(<li key={starter._id}>{starter.name}</li>)
    	})
    	return elements;
    }

    render() {
    	return <div>
    	<p>Starters</p>
    	<ul>
    	{this.renderStarters()}
    	</ul>
    	</div>
    }
}

export default Starters;
