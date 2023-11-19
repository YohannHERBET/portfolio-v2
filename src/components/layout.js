import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./general.scss"
import ScrollToTopButton from './ScrollToTopButton';

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
        <Header siteTitle={data.site.siteMetadata?.title || `portfolio`} />
        <main>{children}</main>
        <ScrollToTopButton />
        <Footer />
    </>
  )
}

export default Layout
