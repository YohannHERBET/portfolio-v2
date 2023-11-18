import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
      <div className="mt-5 pt-5 text-center">
        <h1>404: Page non trouvée, tu as dû faire une erreur</h1>
        <p>Il semblerait que tous les chemins ne mènent pas à Rome.</p>
      </div>
  </Layout>
)

export const Head = () => <Seo title="404 Page non trouvée" />

export default NotFoundPage
