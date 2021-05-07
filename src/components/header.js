import React from "react"

const Header = () => (
  <header>
    <nav className="navbar">
      <a href="/" className="logo">
        efeichen
      </a>
      <nav className="navbar__menu">
        <a href="/about">
          <span role="img" aria-label="star">
            ⭐️
          </span>
          ABOUT
        </a>
        <a href="/work">
          <span role="img" aria-label="man technologist">
            👨‍💻
          </span>
          WORK
        </a>
      </nav>
    </nav>
  </header>
)

export default Header
