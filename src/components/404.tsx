import React from "react"
import { Link } from "gatsby"

import i18n from "i18next"

import Layout from "./layout"
import SEO from "./seo"

const NotFound: React.FC<{ lang: string }> = ({ lang }) => {
  return (
    <Layout lang={lang}>
      <SEO title="404 Not found" />
      <div className="max-w-md py-16 text-gray-0 dark:text-gray-100 sm:mx-auto">
        <h1 className="text-xl">{i18n.t("404-header")}</h1>
        <p className="text-gray-300 dark:text-gray-400">
          {i18n.t("404-text-beforelink")}
          <Link to="/" className="text-secondary-400">
            {i18n.t("404-text-linktext")}
          </Link>
          {i18n.t("404-text-afterlink")}
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
