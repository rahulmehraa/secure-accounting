import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (

    <>
      <div className='row'>
        <div className='col-3'>
          <img src="assets/img/logo-secure.png" ></img>
        </div>
        <div className='col-9'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                  <a className="nav-link" href="/">Features</a>
                  <a className="nav-link" href="/">Pricing</a>
                  <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
              </div>
            </div>
            <button>Login</button>
          </nav>
        </div>
      
      </div>
  
    </>
  )
}

export default Header