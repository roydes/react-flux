import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Logo from './components/Logo/Logo.jsx'
import UserPage from './pages/UsersPage.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <div className="App-container container-fluid p-0">
          <div className="row w-100">
            <div className="col-md-2 d-none d-lg-block d-xl-none">
             <Sidebar></Sidebar>
            </div>
            <div className="content-area col-xs-12 col-md-10 d-flex flex-column justify-content-center align-items-center">
              <UserPage></UserPage> 
              <Logo></Logo>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
