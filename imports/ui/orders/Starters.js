import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';


class Starters extends React.Component {
    constructor(props) {
        super(props);

    }

    renderStarters(){
    	let s = this.props.starters;
    	elements = [];
    	s.forEach((starter)=>{ 
    
            elements.push(
                      <RadioButton
                        value={starter._id}
                        label={starter.name}
                        key={starter._id}
                      />)
    	})
    	return elements;
    }
  saveAndContinue(e) {
    e.preventDefault()


    var data = {
    starter:this.refs.starters.state.selected
    }


    this.props.saveValues(data)
    this.props.nextStep()
  }


    render() {
    	return <div>
    	<p>Entradas:</p>

    <RadioButtonGroup name="starters" ref="starters" valueSelected={this.props.order.starter} >
    	{this.renderStarters()}

    </RadioButtonGroup>
    <RaisedButton label='siguiente' primary={true} onTouchTap={this.saveAndContinue.bind(this)}/> 

    	</div>
    }
}

export default Starters;
