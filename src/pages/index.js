import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from '@emotion/core'

const H1 = css `
  color: blue;
  &:hover {
    color: pink;
    transition: color 0.5s;
  }
`

const TOPHERO = css `
  ul {
    position: relative;
    width: 920px;
    height: 350px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const HEROIMAGE1 = css `
  position: absolute;
  width: 100%;
  list-style: none;
  top: 0;
  right: 420px;
  transition: right 1.0s ease-in-out;
  z-index: 0;
  overflow: visible;

  &:hover {
    z-index: 2;
    right: 0;
    transition: right 1.0s ease-in-out;
  }
`

const HEROIMAGE2 = css `
  position: absolute;
  width: 100%;
  list-style: none;
  top: 0;
  left: 420px;
  transition: left 1.0s ease-in-out;
  z-index: 0;

  &:hover {
    z-index: 2;
    left: 0;
    transition: left 1.0s ease-in-out;
  }

  &::after {
    content: "";
    width: 0;
    height: 0;
    position: relative;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 css={H1}>テストタイトルテストタイトル</h1>
    <div css={TOPHERO}>
      <ul>
        <li css={HEROIMAGE1}><img src="https://placehold.jp/24/cc99cc/993333/920x350.png" alt=""/></li>
        <li css={HEROIMAGE2}><img src="https://placehold.jp/24/cc9999/993333/920x350.png" alt=""/></li>
      </ul>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
