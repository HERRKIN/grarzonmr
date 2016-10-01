import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


class MainCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state={selected:this.props.order.main};

    }

    renderMainCourses(){
    	let mc = this.props.mainCourses;
    	elements = [];
    	mc.forEach((main)=>{ 
    
            elements.push(
                      <RadioButton
                        value={main._id}
                        label={main.name}
                        key={main._id}
                      />)
    	})
    	return elements;
    }
  saveAndContinue(e) {
    e.preventDefault()

    var data = {
    main:this.state.selected
    }


    this.props.saveValues(data)
    this.props.nextStep()
  }

changed(e, value){

  this.setState({selected:value});
}
    render() {
    	return <div>
		<p>Principales: </p>
		 <Paper zDepth={1} >
    <RadioButtonGroup name="mainCourses" onChange={this.changed.bind(this)}  ref="mainCourses" valueSelected={this.state.selected} >
    	{this.renderMainCourses()}

    </RadioButtonGroup> 
    </Paper>
    <RaisedButton  className="next" label='siguiente' primary={true} disabled={this.state.selected===null} onTouchTap={this.saveAndContinue.bind(this)}/> 

    	</div>
    }
}

export default MainCourses;
