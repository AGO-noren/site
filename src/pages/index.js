import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const H1 = css `
  color: #2c2c2c;
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
    overflow: hidden;
  }
`

const HEROIMAGE1 = css `
  position: absolute;
  width: 100%;
  list-style: none;
  top: 0;
  right: 460px;
  transition: right 0.1s ease-in-out;

  &:hover {
    z-index: 2;
    right: 0;
    transition: right 0.5s ease-in-out;
  }

`

const HEROIMAGE2 = css `
  position: absolute;
  width: 100%;
  list-style: none;
  top: 0;
  left: 460px;
  transition: left 0.1s ease-in-out;

  &:hover {
    z-index: 2;
    left: 0;
    transition: left 0.5s ease-in-out;
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
        <li css={HEROIMAGE1}><Link to="/hobby/"><img src="https://placehold.jp/24/cc9999/993333/920x350.png" alt=""/></Link></li>
        <li css={HEROIMAGE2}><Link to="/works/"><img src="https://placehold.jp/24/cc99cc/993333/920x350.png" alt=""/></Link></li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
