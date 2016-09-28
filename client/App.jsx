import React, {Component} from 'react';
import NavLink from '../imports/ui/NavLink.jsx';
// import Repo from '../imports/ui/Repo.jsx'
import { IndexLink , Link } from 'react-router'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';


// import MyAwesomeReactComponent from './MyAwesomeReactComponent.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MenuItemInsert from '../imports/ui/MenuItemInsert.jsx';

injectTapEventPlugin();
const style = {

  activeItem: {
    color: 'red'
  }
};


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

        <Drawer docked={false} width={200}  open={this.state.drawerOpen}   onRequestChange={this.handleToggle.bind(this)} >
          <AppBar title="GarzonMR"  onLeftIconButtonTouchTap={this.handleToggle.bind(this)}/>
          <ul className="drawerLinks">
          <Menu >
             
          <MenuItem
            containerElement={<Link to="/"  />}
            primaryText="Home"
            onTouchTap={this.handleToggle.bind(this)}
          />  
          <MenuItem
            containerElement={<Link to="/menu"  />}
            primaryText="Menu"
            onTouchTap={this.handleToggle.bind(this)}
          />
          <MenuItem  
            containerElement={<Link to="/About" />}
            primaryText="About"
            onTouchTap={this.handleToggle.bind(this)}
          />
          </Menu>
            <li><IndexLink to="/" onTouchTap={this.handleToggle.bind(this)}  activeClassName="active">Home</IndexLink></li>
          	<li><NavLink to="/menu" onTouchTap={this.handleToggle.bind(this)}  activeClassName="active">Menu</NavLink></li>
            <li><NavLink to="/about" onTouchTap={this.handleToggle.bind(this)} activeClassName="active">About</NavLink></li>
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