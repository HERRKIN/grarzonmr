import React from 'react';
import Confirmation from './Confirmation';
import Desserts from './Desserts';
import MainCourses from './MainCourses';
import Starters from './Starters';
import Success from './Success';
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import MenuItems from '../../../collections/MenuItems.js'

var Order = {
	starter:null,
	main:null,
	dessert:null,
	customer:null
}


class TakeOrder extends React.Component {


    constructor(props) {
        super(props);
        // this.displayName = 'TakeOrder';
		this.state={step:1}
    }

    saveValues (fields) {
        // Remember, `Order` is set at the top of this file, we are simply appending
        // to and overriding keys in `Order` with the `fields` with Object.assign
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        Order = Object.assign({}, Order, fields)
    }

    nextStep() {
      this.setState({
        step : this.state.step + 1
      })
    }

// Same as nextStep, but decrementing
    previousStep() {
      this.setState({
        step : this.state.step - 1
      })
    }

    componentWillUnmount() {
          Order = {
            starter:null,
            main:null,
            dessert:null,
            customer:null
          }
    }

    render() {
      console.log(this.state)
      console.log(Order)
       switch (this.state.step) {
			case 1:
				return <Starters  nextStep={this.nextStep.bind(this)}
                           order = {Order} 
                           starters = {this.props.entradas}
                           saveValues={this.saveValues}/>
			case 2:
				return <MainCourses  nextStep={this.nextStep.bind(this)}
                           previousStep={this.previousStep}
                           order = {Order} 
                           mainCourses = {this.props.principales}
                           saveValues={this.saveValues}/>
			case 3:
				return <Desserts nextStep={this.nextStep.bind(this)}
                           previousStep={this.previousStep} 
                           order = {Order} desserts = {this.props.postres}
                           saveValues={this.saveValues}/>
			case 4:
				return <Confirmation  order = {Order}  
        starters= {this.props.entradas}          
        mainCourses= {this.props.principales}
        desserts= {this.props.postres}
            

        submitOrder={this.submitOrder}/>
			case 5:
				return <Success  order = {Order} />
		}
    }
}




export default createContainer(() => {
  // Meteor.subscribe('MenuList')
  const entradas = MenuItems.find({ 'tipo' : 'Entrada' }).fetch()
  const principales = MenuItems.find({ 'tipo' : 'Principal' }).fetch()
  const postres = MenuItems.find({ 'tipo' : 'Postre' }).fetch()
  return { entradas , principales, postres}
}, TakeOrder)