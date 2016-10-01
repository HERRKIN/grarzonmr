import React from 'react';


var starter
var main
var dessert

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        // this.displayName = 'Confirmation';

    }
    componentDidMount() {
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
    render() {
    	console.log(starter.name)
    	return <div>
    		<p>Confitmar orden</p>



    		<span><b>Entrada:</b> {this.starter}</span>

    		</div>
    }
}

export default Confirmation;
