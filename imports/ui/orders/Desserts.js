import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

class Desserts extends React.Component {
    constructor(props) {
        super(props);

    }

    renderDesserts(){
    	let d = this.props.desserts;
    	elements = [];
    	d.forEach((dessert)=>{ 
    
            elements.push(
                      <RadioButton
                        value={dessert._id}
                        label={dessert.name}
                        key={dessert._id}
                      />)
    	})
    	return elements;
    }

  saveAndContinue(e) {
    e.preventDefault()

    // Get values via this.refs

    var data = {
    dessert:this.refs.desserts.state.selected
    }
    this.props.saveValues(data)
    this.props.nextStep()
  }


    render() {
return <div>
    	<p>Postres</p>

    <RadioButtonGroup name="desserts" ref="desserts" valueSelected={this.props.order.dessert} >
    	{this.renderDesserts()}

    </RadioButtonGroup>
    <RaisedButton label='siguiente' primary={true} onTouchTap={this.saveAndContinue.bind(this)}/> 

    	</div>
    }
}

export default Desserts;
