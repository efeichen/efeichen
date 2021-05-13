import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import tw, { css } from "twin.macro"

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
          <p
            tw="max-w-lg text-center mx-auto px-4"
            css={`
              font-family: "Space Mono";
            `}
          >
            I'm a second-year undergrad at UC San Diego studying Computer
            Science. I'm currently looking for software engineering internship
            positions or HCI research positions for Summer 2021
          </p>
        </header>
        <article className="card card--about" tw="rounded-lg">
          <h1
            tw="text-2xl mb-4 font-bold inline-block"
            css={`
              font-family: "Manrope";
              background-image: linear-gradient(#ffcc35, #ffcc35);
              background-repeat: no-repeat;
              background-size: 100% 0.4em;
              background-position: 0 88%;
            `}
          >
            Work
          </h1>
          <p>
            As a student, there're a ton of things I'm interested in learning.
            Most recently, I've been exploring areas at the intersection of
            design and social computing (with UCSD's ProtoLab) and
            decentralized, grassroots journalism. Coming out of high school, I
            wanted to solving problems at the intersection between{" "}
            <b>technology</b>, <b>society</b>, <b>individuals</b>, and the{" "}
            <b>economy</b>.
          </p>
          <p>
            How to make machine learning algorithms less prone to human biases?
            How to fix issues with our "Web 2.0" dominated by profit-hungry,
            data-seeking Internet giants? How can we further empower data
            &mdash; not for the sake of convenience, but humanity?
          </p>
          <h1
            tw="text-2xl mb-4 font-bold inline-block"
            css={`
              font-family: "Manrope";
              background-image: linear-gradient(#ffcc35, #ffcc35);
              background-repeat: no-repeat;
              background-size: 100% 0.4em;
              background-position: 0 88%;
            `}
          >
            Life
          </h1>
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
