import React from "react"
import { PageProps } from "gatsby"

import i18n from "i18next"

import Index from "../components/index"

export const IndexPage: React.FC<PageProps> = () => {
  return <Index lang={i18n.language} />
}

export default IndexPage
