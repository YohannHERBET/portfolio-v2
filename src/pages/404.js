import * as React from "react"
import Error404 from "../components/error404";
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Error404 />
  </Layout>
)

export const Head = () => <Seo title="404 Page non trouvée" />

export default NotFoundPage
