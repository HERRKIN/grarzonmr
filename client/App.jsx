import React, {Component} from 'react';
import NavLink from '../imports/ui/NavLink.jsx';
// import Repo from '../imports/ui/Repo.jsx'
import { IndexLink } from 'react-router'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MenuItemInsert from '../imports/ui/MenuItemInsert.jsx';
injectTapEventPlugin();


class App extends Component {
// const App = () => (
	 constructor(props) {
    super(props);
    this.state = {drawerOpen: false};
  }
	handleToggle () {
		this.setState({drawerOpen: !this.state.drawerOpen});
		// console.log(this.state.drawerOpen)
	}

  render(){
  	return <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
	<Paper  zDepth={1} className="container">
    <AppBar title='GarzonMR' 
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}/>

        <Drawer docked={false} width={200}  open={this.state.drawerOpen}   onRequestChange={(open) => this.setState({open})} >
          <AppBar title="GarzonMR"  onLeftIconButtonTouchTap={this.handleToggle.bind(this)}/>
          <ul className="drawerLinks">

            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          	<li><NavLink to="/menu" activeClassName="active">Menu</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          	</ul>
        </Drawer>
        {/*<MenuItemInsert />*/}
  {this.props.children}
  </Paper>
  </MuiThemeProvider>
	}
}
// );

    // render() {
    //     return <div>
    //     <h1>React Router Tutorial</h1>
    //     <ul role="nav">
    //     	<li><IndexLink to="/">Home</IndexLink></li>
    //      	<li><NavLink to="/about" activeClassName="active">About</NavLink></li>
    //      	<li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
    //     </ul>
    //     {/* add this */}
    //     {this.props.children}
    //   </div>
    // }
// }

export default App;








// import React from 'react';
// import AppBar from 'material-ui/AppBar';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
// const MyAwesomeReactComponent = () => (

//   <AppBar
//     title="GarzonMR"
//     iconClassNameRight="muidocs-icon-navigation-expand-more"
//     onLeftIconButtonTouchTap={handleTT}
//   />
// );


// const handleTT=()=>{
// 	console.log('touched')
// }


// export default App;