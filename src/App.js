import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import CollapseItem from './components/CollapseItem/CollapseItem';
import NestedMenu from './components/NestedMenu/NestedMenu';
import AppRoutes from './AppRoutes';
import LayoutStore from './stores/LayoutStore';
import globals from './AppGlobals.js';

const layoutEventsTypes = globals.storeEvents.layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isSidenavOpened: LayoutStore.getNavbarVisivility()};
  }

  componentDidMount() {
    LayoutStore.on(layoutEventsTypes.navbarVisisbilityChanged, () => {
      console.log('navbar changed')
      this.setState({isSidenavOpened: LayoutStore.getNavbarVisivility()})
    })
  }

  render() {
    const style = this.state.isSidenavOpened ? {minWidth:'250px'}:  {width:'0'}
    const menuList = [
      {title: 'Users', content: null, childs: [
        {title: 'List of users', content:  <Link className="nav-link text-light" to="/users">User list</Link>, childs: []},
        {title: 'Add user', content: <Link className="nav-link text-light" to="/users/create">Create user</Link>, childs: []},
        {title: 'Users stats', content: <Link className="nav-link text-light" to="/users/create">User stats</Link>, childs: []}]
      },
      {title: 'Posts', content: null, childs: [
        {title: 'List of Posts', content:  <Link className="nav-link text-light" to="/posts">Posts</Link>, childs: []},
        {title: 'Create post', content:  <Link className="nav-link text-light" to="/posts">Create a post</Link>, childs: []}
      ]},
      {title: 'Catalogs', content: null, childs: [
        {title: 'List of catlogs', content:  <Link className="nav-link text-light" to="/posts">Posts</Link>, childs: []},
        {title: 'Create a catalog', content:  <Link className="nav-link text-light" to="/posts">Create a post</Link>, childs: []}
      ]},
    ];
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <div className="App-container container-fluid p-0">
          <div className="row w-100 flex-nowrap">
            <Sidebar opened={this.state.isSidenavOpened} content={<NestedMenu menus = {menuList}></NestedMenu>}></Sidebar>
            <div className="content-area w-100 d-flex flex-column align-items-center">
              <AppRoutes></AppRoutes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
