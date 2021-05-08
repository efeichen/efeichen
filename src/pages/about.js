import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

import Layout from "../layouts/default"
import Seo from "../components/Seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <main className="container--main container--flex">
        <header className="container--auto">
          <StaticImage
            src="../images/me.jpg"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A photo of Kenneth Chen"
            className="img--about"
            css={css`
              display: block;
              position: relative;
            `}
          />
          <h1
            className="text--shadow-inverse text--center"
            css={css`
              z-index: 1;
              position: relative;
            `}
          >
            ABOUT ME
          </h1>
        </header>
        <article className="card card--about">
          <p>
            Hi! Kenneth here. I'm a second-year undergrad at UC San Diego
            studying Computer Science.
          </p>
          <p>
            As a student, there're a ton of things I'm interested in learning.
            Most recently, I've been exploring areas at the intersection of
            design and social computing (with UCSD's ProtoLab) and
            decentralized, grassroots journalism. However, no matter how much my
            interest shifts throughout the next couple years, I want to remind
            myself of my ambitions coming out of high school: Solving problems
            at the intersection between <b>technology</b>, <b>society</b>,{" "}
            <b>individuals</b>, and the <b>economy</b>.
          </p>
          <p>
            How to make machine learning algorithms less prone to human biases?
            How to fix issues with our "Web 2.0" dominated by profit-hungry,
            data-seeking Internet giants? How can we further empower data
            &mdash; not for the sake of convenience, but humanity?
          </p>
          <p>
            Oh ya occasionally I also watch anime, play golf, read newsletters,
            and hangout with friends...
          </p>
        </article>
      </main>
    </Layout>
  )
}

export default AboutPage
