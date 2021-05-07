import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <nav className="navbar">
      <Link to="/" className="logo">
        efeichen
      </Link>
      <nav className="navbar__menu">
        <Link to="/about">
          <span role="img" aria-label="star">
            ⭐️
          </span>
          ABOUT
        </Link>
        <Link to="/work">
          <span role="img" aria-label="man technologist">
            👨‍💻
          </span>
          WORK
        </Link>
      </nav>
    </nav>
  </header>
)

export default Header
