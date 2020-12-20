import React from "react"
import { PageProps } from "gatsby"

import i18n from "i18next"

import NotFound from "../components/404"

export const NotFoundPage: React.FC<PageProps> = () => {
  return <NotFound lang={i18n.language} />
}

export default NotFoundPage
