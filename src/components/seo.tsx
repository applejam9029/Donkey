import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import i18n from "i18next"
import path from "path"

export interface SEOProps {
  description?: string
  meta?: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >[]
  title?: string
}

export const SEO: React.FC<SEOProps> = ({ description, meta, title }) => {
  const { site, allFile } = useStaticQuery<GatsbyTypes.SEOSiteDataQuery>(
    graphql`
      query SEOSiteData {
        site {
          siteMetadata {
            title
            author
            url
          }
        }
        allFile(filter: { base: { eq: "icon.png" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 512, height: 512) {
                  src
                }
              }
            }
          }
        }
      }
    `
  )

  const titleBar = title
    ? `${title} | ${site?.siteMetadata?.title}`
    : site?.siteMetadata?.title

  const metaDescription = description || i18n.t("description") || ""
  const url = site?.siteMetadata?.url

  const image = allFile.edges[0].node.childImageSharp?.fixed?.src

  const defaultMeta: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: titleBar,
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
      name: `twitter:title`,
      content: titleBar,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  const imageMeta =
    image && url
      ? [
          {
            property: "og:image",
            content: path.join(url, image),
          },
          {
            name: "twitter:image",
            content: path.join(url, image),
          },
        ]
      : []

  return (
    <Helmet
      htmlAttributes={{
        lang: i18n.language,
        // class: "dark",
      }}
      title={titleBar}
      meta={defaultMeta.concat(meta || [], imageMeta)}
    />
  )
}

export default SEO
