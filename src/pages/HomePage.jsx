import React, { Component } from 'react'
import Logo from '../components/Logo/Logo'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className="my-5">Welcome to React Training</h1>
        <Logo></Logo>
      </div>
    )
  }
}
