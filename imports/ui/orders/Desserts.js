import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


class Desserts extends React.Component {
    constructor(props) {
        super(props);
        this.state={selected:this.props.order.dessert};

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

    var data = {
    dessert:this.state.selected
    }
    this.props.saveValues(data)
    this.props.nextStep()
  }

changed(e, value){
    this.setState({selected:value});

}
    render() {
return <div>
    	<p>Postres</p>
    <Paper zDepth={1} >
    <RadioButtonGroup name="desserts" ref="desserts" onChange={this.changed.bind(this)} valueSelected={this.state.selected} >
    	{this.renderDesserts()}

    </RadioButtonGroup>
    </Paper>
    <RaisedButton className="next" label='siguiente' primary={true} disabled={this.state.selected===null} onTouchTap={this.saveAndContinue.bind(this)}/> 
    	</div>
    }
}

export default Desserts;
