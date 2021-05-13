import React from "react"
import tw, { styled } from "twin.macro"

const Footer = () => (
  <StyledFooter className="footer">
    <div>
      <span>(c) {new Date().getFullYear()}</span>
      <span>
        Made with&nbsp; <span className="heart">❤</span> &nbsp;by Ken Chen
      </span>
    </div>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  & > div {
    ${tw`container mx-auto flex justify-between px-8 md:px-0`}
  }
`

export default Footer
