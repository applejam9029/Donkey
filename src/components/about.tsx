import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutAndPrivacy from "../components/description"

export const About: React.FC<{ lang: string }> = ({ lang }) => {
  return (
    <Layout lang={lang}>
      <SEO title="About" />
      <div className="max-w-md sm:mx-auto py-6 flex flex-col gap-4">
        <AboutAndPrivacy />
      </div>
    </Layout>
  )
}

export default About
