import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { css } from '@emotion/core'

const H1 = css `
  color: blue;
  &:hover {
    color: pink;
    transition: color 0.5s;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 css={H1}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
