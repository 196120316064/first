import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(prop) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TextUtils</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>
          <form className="d-flex">
            <div style={{ color: 'light' }}>
              <label className={`form-check-label text-${prop.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Other theams:</label>
              <img src="https://htmlcolorcodes.com/assets/images/colors/neon-orange-color-solid-background-1920x1080.png" onClick={prop.orangemode} alt="Orange" className="rounded-circle mx-2" style={{ height: "20px", width: "20px", border: `2px solid ${prop.mode === 'light' ? 'black' : 'white'}` }} />
              <img src="https://artsyfartsylife.com/wp-content/uploads/2019/09/normal-purple-color-200x200.jpg" onClick={prop.purplemode} alt="#B242AD" className="rounded-circle mx-2" style={{ height: "20px", width: "20px", border: `2px solid ${prop.mode === 'light' ? 'black' : 'white'}` }}  />
            </div>
            <div className={`form-check form-switch text-${prop.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={prop.changemode} type="checkbox" id="bgstyle" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{prop.txt}</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.prototype = {
  Title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  Title: 'Set title here',
  About: 'About text here'
};