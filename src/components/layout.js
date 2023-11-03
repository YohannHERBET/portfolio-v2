import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header"
import "./general.scss"

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
        <footer>bas de page</footer>
    </>
  )
}

export default Layout
