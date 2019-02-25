import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import AppRoutes from './AppRoutes';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <div className="App-container container-fluid p-0">
          <div className="row w-100">
            <div className="col-md-2 d-none d-md-block d-xs-none">
             <Sidebar></Sidebar>
            </div>
            <div className="content-area col-xs-12 col-md-10 d-flex flex-column align-items-center">
              <AppRoutes></AppRoutes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
