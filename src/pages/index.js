import * as React from "react"
import { Link } from "gatsby"
import Typed from "react-typed"
import {
  FiTwitter,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi"

import Layout from "../layouts/default"
import Seo from "../components/Seo"

const IndexPage = () => {
  const typedConfig = {
    strings: [
      "Hi! Welcome! 👋",
      "I ❤ the Web! 🌎",
      "Human-centric by design! 👨‍👩‍👧‍👦",
      "Move fast and fix things! 🛠",
      "Responsible and ethical tech! 🧐",
      "Use data for the better! 💪",
      "Coffee ☕, music 🎵, and ramen 🍜!",
    ],
    showCursor: false,
    typeSpeed: 50,
    backDelay: 2000,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity,
  }

  return (
    <Layout>
      <Seo title="Home" />
      <main className="container container--side container--main container--flex-col">
        <h1 className="title--hero text--shadow-inverse">KENNETH EFEI CHEN</h1>
        <h2 className="sub--hero cli">
          <Typed {...typedConfig} />
        </h2>
        <section className="icon-tray">
          <a href="https://twitter.com/efeichen">
            <FiTwitter />
          </a>
          <a href="mailto:efeichen@gmail.com">
            <FiMail />
          </a>
          <a href="https://github.com/efeichen">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/kenneth-chen-ba1073127">
            <FiLinkedin />
          </a>
          <a href="https://www.instagram.com/ken.ets">
            <FiInstagram />
          </a>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
