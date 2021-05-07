import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

import Layout from "../layouts/default"
import Seo from "../components/Seo"

const WorkPage = () => {
  return (
    <Layout>
      <Seo title="Work" />
      <main className="container--main">
        <header className="container container--side">
          <h1 className="text--shadow-inverse">WORK</h1>
        </header>
        <section
          className="container--side-thin container--flex"
          css={css`
            justify-content: space-between;
          `}
        >
          <article className="card card--showcase">
            <a href="https://www.vngle.com/">
              <figure className="showcase__img">
                <StaticImage
                  src="../images/vngle.png"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Logo of Vngle"
                />
              </figure>
              <section className="showcase__content">
                <h1 className="showcase__title">Vngle</h1>
                <h2 className="showcase__sub">
                  Decentralized grassroots journalism for news deserts
                </h2>
              </section>
            </a>
          </article>
          <article className="card card--showcase">
            <a href="https://github.com/efeichen/mavo-gdrive">
              <figure className="showcase__img">
                <StaticImage
                  src="../images/mavo.png"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Logo of Mavo"
                />
              </figure>
              <section className="showcase__content">
                <h1 className="showcase__title">Mavo Google Drive</h1>
                <h2 className="showcase__sub">
                  Google Drive backend plugin for Mavo using Drive REST API
                </h2>
              </section>
            </a>
          </article>
          <article className="card card--showcase">
            <a href="https://www.figma.com/file/LcTFOeWFXxDOhv8WxDOHF2/NapStrap?node-id=0%3A1">
              <figure className="showcase__img">
                <StaticImage
                  src="../images/napstrap.png"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Logo of Napstrap"
                />
              </figure>
              <section className="showcase__content">
                <h1 className="showcase__title">NapStrap</h1>
                <h2 className="showcase__sub">
                  UI prototype of infant temperature monitor mobile app
                </h2>
              </section>
            </a>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default WorkPage
