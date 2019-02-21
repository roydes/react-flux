import React from 'react';
import Logo from '../Logo/Logo.jsx'
import { Link } from 'react-router-dom'
export default function Toolbar() {
  return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <Link className="navbar-brand" to="/">
          <Logo></Logo>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Post</Link>
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
