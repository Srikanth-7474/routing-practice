// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar-container">
    <div className="nav-items-container">
      <div className="nav-title-container">
        <img
          alt="wave"
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <h1>Wave</h1>
      </div>
      <ul className="nav-links-container">
        <li>
          <Link className="nav-link" exact to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" exact to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" exact to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
