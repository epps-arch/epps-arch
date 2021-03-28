import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
          margin: `0 auto`,
          width: 600,
          padding: `1.45rem 1.0875rem`,
        }}
    >
        <Link style={{ color: "#ffffff", textDecoration: 'none', fontWeight: "100", }} to={'/'}>
            <h1 style={{ margin: ".5rem 0" }}>{siteTitle.toUpperCase()}</h1>
        </Link>
      <h3>ARCHITECTURE <span style={{ margin: "0 .5rem" }}>&bull;</span> INTERIOR ARCHITECTURE</h3>
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
