import React, { PureComponent } from 'react'
import Logo from '../Logo/Logo.jsx'
import { Link } from 'react-router-dom'
import LayoutStore from '../../stores/LayoutStore'
import * as LayoutActions from '../../actions/LayoutActions'
import './Toolbar.css'

export default class Toolbar extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { sidenavVisibility: LayoutStore.getNavbarVisivility() }
    this.sidenavVisibilityChange = this.sidenavVisibilityChange.bind(this)
  }

  sidenavVisibilityChange() {
    LayoutActions.changeSidenavVisisbility(!this.state.sidenavVisibility)
    this.setState({ sidenavVisibility: !this.state.sidenavVisibility })
  }


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <button className="sidebar-controler" type="button" onClick = {this.sidenavVisibilityChange}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <Logo></Logo>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">Post</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Catalogs</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }  
}
