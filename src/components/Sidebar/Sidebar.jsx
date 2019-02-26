import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
           <Link className="nav-link text-light" to="/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="">Posts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="">Catalogs</Link>
          </li>
        </ul>
      </div>
    )
  }
}
