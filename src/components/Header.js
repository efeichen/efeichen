import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

const Header = () => (
  <StyledHeader>
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
  </StyledHeader>
)

const StyledHeader = styled.header`
  ${tw`bg-white`}

  .navbar {
    ${tw`container mx-auto px-8 md:px-0`}
  }
`

export default Header
