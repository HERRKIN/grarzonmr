import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import {Meteor} from 'meteor/meteor';

import App from './App.jsx'


import About from '../imports/ui/About';
import Home from '../imports/ui/Home.jsx';
import Repos from '../imports/ui/Repos';
import Repo from '../imports/ui/Repo';








Meteor.startup(() => {
ReactDOM.render(
  <Router history={browserHistory}>    
    <Route path="/" component={App}>
    {/* add the routes here */}
	// <Route path="/repos" component={Repos}>
	// 	<IndexRoute component={Home}/>
	//   <Route path="/repos/:userName/:repoName" component={Repo}/>
	// </Route>
    <Route path="/about" component={About}/>
    </Route>
 </Router>,
  document.getElementById('app'))

});
