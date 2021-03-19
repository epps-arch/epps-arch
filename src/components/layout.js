/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "./header"
import SEO from "./seo"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title="EPPS ARCHITECTURE" />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          width: 600,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}>
            <nav style={{ width: '30%' }}>
                <MainMenu />
            </nav>
            <section style={{width: '70%', position: 'relative', }}>
                {children}
            </section>
        </main>
        <footer className="footer">
            <FooterItem>1 PINCKNEY STREET</FooterItem>
            <FooterItem grow={false}>&bull;</FooterItem>
            <FooterItem>CHARLESTON</FooterItem>
            <FooterItem grow={false}>&bull;</FooterItem>
            <FooterItem>SOUTH CAROLINA 29401</FooterItem>
            <FooterItem grow={false}>&bull;</FooterItem>
            <FooterItem>PHONE (843) 577-2080</FooterItem>
            <FooterItem grow={false}>&bull;</FooterItem>
            <FooterItem><a href="email:eppsarch@att.net" style={{ color: "#ffffff", textDecoration: 'none', }}>EPPSARCH@ATT.NET</a></FooterItem>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const MainMenu = () => {
    const MENU_ITEMS = [
        { name: 'RESIDENTIAL', path: '/residential/' },
        { name: 'COMMERCIAL', path: '/commercial/' },
        { name: 'GOVERNMENT', path: '/government/' },
        { name: 'INTERIORS', path: '/interiors/' },
        { name: 'RETROFIT', path: '/retrofit/' },
    ]

    return (
        <ul style={{ display: "flex", flexDirection: "column", listStyle: 'none', margin: 0, }}>
            {MENU_ITEMS.map(i => (
                <li key={i.name}>
                    <Link style={{ color: "#ffffff", textDecoration: 'none', fontSize: "0.9rem", fontWeight: "100", }} to={i.path}>{i.name}</Link>
                </li>
            ))}
        </ul>
    )
}

const FooterItem = ({ children, size = .5, grow = true }) => {
    return (<div style={{
        flexGrow: grow ? 1 : 0,
        flexBasis: "auto",
        margin: "0.25em 0",
        padding: grow ? "0 1em" : "0",
        textAlign: "center",
        fontSize: `${size}em`,
    }}>{children}</div>)
}