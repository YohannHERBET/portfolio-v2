import * as React from "react"
import Error404 from "../components/error404";
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Page non trouvée" description="La page que vous cherchez semble introuvable." />
    <Error404 />
  </Layout>
)

export default NotFoundPage
