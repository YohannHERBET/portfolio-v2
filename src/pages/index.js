import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/home"
import About from "../components/about";
import ProjectSection from "../components/projectSection";

const IndexPage = () => (
  <Layout>
    <Seo title="Portfolio" />
    <Home />
    <About />
    <ProjectSection />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
