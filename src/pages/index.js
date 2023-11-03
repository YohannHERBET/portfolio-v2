import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div>Hello world !</div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
