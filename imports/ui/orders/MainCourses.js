import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';


class MainCourses extends React.Component {
    constructor(props) {
        super(props);

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

    // Get values via this.refs

    var data = {
    main:this.refs.mainCourses.state.selected
    }


    this.props.saveValues(data)
    this.props.nextStep()
  }


    render() {
    	return <div>
    	<p>Principales</p>

    <RadioButtonGroup name="mainCourses" ref="mainCourses" valueSelected={this.props.order.main} >
    	{this.renderMainCourses()}

    </RadioButtonGroup>
    <RaisedButton label='siguiente' primary={true} onTouchTap={this.saveAndContinue.bind(this)}/> 

    	</div>
    }
}

export default MainCourses;
