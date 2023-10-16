import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import favicon from "../images/favicon.png"
import { Helmet } from "react-helmet"

const Seo = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet>
      <html lang="en" />
      <title>{site.siteMetadata.title}</title>
      <link rel="icon" href={favicon} />
      <meta charSet="UTF-8" />
    </Helmet>
  )
}

export default Seo
