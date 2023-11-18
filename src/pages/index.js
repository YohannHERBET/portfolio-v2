import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/home"
import About from "../components/about";
import ProjectSection from "../components/projectSection";
import ContactForm from "../components/contact";

const IndexPage = () => (
  <Layout>
    <Seo title="Page d'accueil" />
    <Home />
    <About />
    <ProjectSection />
    <ContactForm />
  </Layout>
)

export default IndexPage
