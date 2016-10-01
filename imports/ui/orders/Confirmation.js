import React from 'react';
import {Form, Field} from 'simple-react-form'
import Text from 'simple-react-form-material-ui/lib/text'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

var starter
var main
var dessert

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state={customer:this.props.order.customer};


    }
    componentWillMount() {
    	// console.log(this.props.order)
    	self=this;


          starter = this.props.starters.filter((i)=>{
          	return i._id === self.props.order.starter; 
          })[0]   

           main = this.props.mainCourses.filter((i)=>{
          	return i._id === self.props.order.main; 
          })[0]

           dessert = this.props.desserts.filter((i)=>{
          	return i._id === self.props.order.dessert; 
          })[0]







    	console.log(starter)
    	console.log(main)
    	console.log(dessert)
    }


  saveAndContinue(e) {

    var data = {
    customer:e.customer
    }
    this.props.saveValues(data)
    this.props.submitOrder()
  }
  changed(e,value){
    console.log(this.state)
    this.setState({customer:value.customer})
  }


    render() {
    	console.log(starter.name)
    	return <div>
    		<p>Confirmar orden</p>
        <Paper zDepth={1} >
    		<span><b>Entrada:</b> {starter.name}</span><br/>
    		<span><b>Principal:</b> {main.name}</span><br/>
    		<span><b>Postre:</b> {dessert.name}</span><br/>
    		</Paper>


        <p>Para confirmar por favor coloque su nombre y presione confirmar</p>

			<Form state={this.state} ref="form" onChange={this.changed.bind(this)} onSubmit={this.saveAndContinue.bind(this)}>
         	 <Field fieldName='customer' label='Tu nombre' type={Text} 
           />
      	</Form>

      		<RaisedButton disabled={this.state.customer===null} className="next" label='Confirmar' primary={true} onTouchTap={() => this.refs.form.submit()}/> 

    		</div>
    }
}

export default Confirmation;
