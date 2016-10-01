import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Starters extends React.Component {
    constructor(props) {
        super(props);
        this.state={selected:this.props.order.starter};
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
    starter:this.state.selected
    }


    this.props.saveValues(data)
    this.props.nextStep()
  }
changed(e, value){

    this.setState({selected:value});

}

    render() {
    	return <div>
    	<p>Entradas:</p>
    <Paper zDepth={1} >
    <RadioButtonGroup name="starters" onChange={this.changed.bind(this)} ref="starters" valueSelected={this.state.selected} >
        {this.renderStarters()}

    </RadioButtonGroup>
    </Paper>
    <RaisedButton className="next" label='siguiente' ref="sig" disabled={this.state.selected===null} primary={true} onTouchTap={this.saveAndContinue.bind(this)}/> 
    	</div>
    }
}

export default Starters;
