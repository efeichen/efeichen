import React from "react"
import Typed from "react-typed"
import {
  FiTwitter,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi"
import "../legacy.css"
import tw, { styled } from "twin.macro"

import Layout from "../layouts/default"
import Seo from "../components/Seo"
import Card from "../components/ProjectCard"

import Vngle from "../images/vngle.png"

const IndexPage = () => {
  const typedConfig = {
    strings: [
      "Hi! Welcome! ๐",
      "I โค the Web! ๐",
      "Human-centric by design! ๐จโ๐ฉโ๐งโ๐ฆ",
      "Move fast and fix things! ๐ ",
      "Responsible and ethical tech! ๐ง",
      "Use data for the better! ๐ช",
      "Coffee โ, music ๐ต, and ramen ๐!",
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
      <HeroSection>
        <div className="hero-intro">
          <h1 className="title--hero text--shadow-inverse">
            KENNETH <br />
            EFEI CHEN
          </h1>
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
        </div>
        <div className="hero-feature">
          <div className="card-wrapper">
            <Card
              imgSrc={Vngle}
              title="Vngle"
              description="Decentralized grassroots journalism for news deserts"
            />
          </div>
        </div>
      </HeroSection>
    </Layout>
  )
}

const HeroSection = styled.main`
  margin-left: var(--space-side);
  margin-right: var(--space-side);
  ${tw`container mx-auto flex flex-1 flex-wrap`}

  .hero-intro {
    ${tw`flex flex-col justify-center flex-1 p-8 md:p-0`}
  }

  .hero-feature {
    ${tw`flex-1 flex items-center justify-center`}

    .card-wrapper {
      ${tw`max-w-lg`}
    }
  }
`

export default IndexPage
