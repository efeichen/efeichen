import React from "react"
import PropTypes from "prop-types"
import "./default.css"

import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
