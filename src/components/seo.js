import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet";

function Seo({ description, title, lang = 'fr', meta = [], children }) {

    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
                siteUrl
              }
            }
          }
        `
    )

    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title
    const siteUrl = site.siteMetadata.siteUrl

    const schemaOrgWebPage = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "url": siteUrl,
        "headline": defaultTitle,
        "inLanguage": lang,
        "mainEntityOfPage": siteUrl,
        "description": metaDescription,
        "name": defaultTitle,
        "author": {
            "@type": "Person",
            "name": site.siteMetadata.author,
        }
    };

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.author || ``,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        >
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgWebPage)}
            </script>
            {children}
        </Helmet>
    )
}

export default Seo
