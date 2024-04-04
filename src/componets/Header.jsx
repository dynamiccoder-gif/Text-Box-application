import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header(props) {
    
  return (
    <> 
    <nav className="navbar navbar-expand-lg bg-body-tertiary"   >
  <div className="container-fluid" style={props.style}>
    <a className="navbar-brand" style={props.style} href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" style={props.style} aria-current="page" to="/Header/Dark">Dark</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={props.style} to="/Header/Box">Box</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button"  style={props.style} data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" style={props.style}>
            <li><a className="dropdown-item" style={props.style} href="#">Action</a></li>
            <li><a className="dropdown-item"  style={props.style} href="#">Another action</a></li>
            <li><hr className="dropdown-divider"  style={props.style}/></li>
            <li><a className="dropdown-item"  style={props.style} href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <div className='box'   >
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggle}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
        </div>
        </div>
    </div>
  </div>
</nav>
<Outlet />
    </>
  )
}

export default Header