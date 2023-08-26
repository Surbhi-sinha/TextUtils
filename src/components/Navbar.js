// BASIX jsx and PROPS
// rfc == react function based component shortcut key
import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from "react-router-dom";
// shortcut = impt

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${(props.mode==='blue'|| props.mode ==='dark')?'dark':'light'} bg-${(props.mode==='blue'|| props.mode ==='dark')?'dark':'light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
            
            
          </ul>
          <div className={`form-check form-switch text-${props.mode ==='light'? 'dark':'light'}`}>
            <input className="form-check-input" onClick = {props.toggleModeDark} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable {props.mode ==='light'? 'Dark':'Light'} Mode</label>
          </div>
          <div className={`form-check form-switch mx-2 text-${props.mode ==='light'? 'dark':'light'}`}>
            <input className="form-check-input" onClick = {props.toggleModeBlue} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable {props.mode ==='light'? 'Blue':'Light'} Mode</label>
          </div>
        </div>
      </div>
    </nav>
    <Outlet/>
    </div>
    
  )
}

// we need to import prototype first
// fir Navbar.propTypes likhana padega with p small P nhi
Navbar.propTypes = {
      title: PropTypes.string,
      aboutText: PropTypes.string
}

// default proptypes are used when title and about and other props are not passed from where the component is called
Navbar.defaultProps = {
      title:"set title here",
      aboutText: "set text here"
}