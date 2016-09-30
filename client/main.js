import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import {Meteor} from 'meteor/meteor';

import App from './App.jsx'
import Menu from '../imports/ui/Menu.js';

import About from '../imports/ui/About';
import Home from '../imports/ui/Home.jsx';
import Repos from '../imports/ui/Repos';
import Repo from '../imports/ui/Repo';

import MenuItemInsert from '../imports/ui/MenuItemInsert'
import MenuItemUpdate from '../imports/ui/MenuItemUpdate'
import TakeOrder from '../imports/ui/orders/TakeOrder';





Meteor.startup(() => {
ReactDOM.render(
  <Router history={browserHistory}>    
    <Route path="/" component={App}>
    {/* add the routes here */}
	{/* <Route path="/repos" component={Repos}>
	  <Route path="/repos/:userName/:repoName" component={Repo}/>
  </Route>*/}
    <IndexRoute component={Home}/>
    <Route path='take-order' component={TakeOrder}/>
    <Route path="/about" component={About}/>
    <Route path="/menu" component={Menu}/>
    <Route path="/menu/new" component={MenuItemInsert}/>
    <Route path="/updateplato/:plato" component={MenuItemUpdate}/>

    </Route>
 </Router>,
  document.getElementById('app'))

});
