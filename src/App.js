import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import AppRoutes from './AppRoutes';
import LayoutStore from './stores/LayoutStore'
import globals from './AppGlobals.js'
import * as LayoutActions from './actions/LayoutActions'
import { Link } from 'react-router-dom'

const layoutEventsTypes = globals.storeEvents.layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isSidenavOpened: LayoutStore.getNavbarVisivility()};
    this.onChangeSidenavVisibility = this.onChangeSidenavVisibility.bind(this);
  }

  componentDidMount() {
    LayoutStore.on(layoutEventsTypes.navbarVisisbilityChanged, () => {
      console.log('navbar changed')
      this.setState({isSidenavOpened: LayoutStore.getNavbarVisivility()})
    })
  }

  render() {
    const style = this.state.isSidenavOpened ? {minWidth:'250px'}:  {width:'0'}
    const sideNavItems = (    
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link text-light" to="/users">Users</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/posts">Posts</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="">Catalogs</Link>
      </li>
    </ul>
    );
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <div className="App-container container-fluid p-0">
          <div className="row w-100 flex-nowrap">
            <Sidebar opened={this.state.isSidenavOpened} content={sideNavItems}></Sidebar>
            <div className="content-area w-100 d-flex flex-column align-items-center">
             <button className="btn btn-secondary w-25" onClick={this.onChangeSidenavVisibility}>{this.state.isSidenavOpened?'Hide':'Show'} sidebar</button>
              <AppRoutes></AppRoutes>
            </div>
          </div>
        </div>
      </div>
    );
  }
  onChangeSidenavVisibility(event) {
    LayoutActions.changeSidenavVisisbility(!this.state.isSidenavOpened);
  }
}

export default App;
