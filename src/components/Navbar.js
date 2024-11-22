import React, { Component } from 'react'
import img1 from './img/icons8-lock-67.png'

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className="container-fluid">
            <img className="align-self-start mr-3" src={img1} alt="Logo"></img>
            <a className="navbar-brand" href="/"><b> Password Manager</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
      </>
    )
  }
}