import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

const BACKGROUND = css `
  background-color: white;
  margin-bottom: 1.45rem;
`

const HEADER = css `
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
`

const HEADERLOGO = css `
  width: 40%;
  padding: 1.45rem 1.0875rem;
  margin: 0;
  a {
    color: #5c5c5c;
    text-decoration: none;
  }
}
`
const GLOBALNAV = css `
  width: 60%;
  ul {
    display: flex;
    justify-content: flex-end;
    margin 0;
    height: 100%;
    align-items: center;

    li {
      list-style-type: none;
      width: 100px;
      text-align: center;
      a {
        position: relative;
        display: block;
        color: #2c2c2c;
        text-decoration: none;

        &::after {
          content: '';
          display: block;
          position: absolute;
          height: 2px;
          width: 0;
          left: 0;
          background-color: red;
          transition: width 0.2s ease-in-out;
        }

        &::after {
          bottom: 0
        }

        &:hover::after {
          width: 70px;
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <header css={ BACKGROUND }>
    <div css={ HEADER }>
      <h1 css={HEADERLOGO}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <nav css={ GLOBALNAV }>
        <ul>
          <li><Link to="/page-2/">about</Link></li>
          <li><Link to="/page-2/">works</Link></li>
          <li><Link to="/page-2/">contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
