import React from "react"

const Footer = () => (
  <footer className="footer">
    <span>(c) {new Date().getFullYear()}</span>
    <span>
      <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>
    </span>
    <span>
      Made with&nbsp; <span className="heart">❤</span> &nbsp;by Ken Chen
    </span>
  </footer>
)

export default Footer
