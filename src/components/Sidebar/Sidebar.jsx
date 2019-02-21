import React, { Component } from 'react';
import './Sidebar.css';
export default class Sidebar extends Component {
  constructor(props) {
      super(props);
      this.state = {opened: props.opened};

  }
  render() {
    return (
      <div className="sidebar bg-dark">
        <ul className="nav flex-column">
          <li className="nav-item">
           <a className="nav-link text-light" href="#">Users</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Post</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Catalogs</a>
          </li>
        </ul>
      </div>
    )
  }
}
