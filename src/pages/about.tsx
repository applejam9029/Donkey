import React from "react"
import { PageProps } from "gatsby"

import i18n from "i18next"

import About from "../components/about"

export const AboutPage: React.FC<PageProps> = () => {
  return <About lang={i18n.language} />
}

export default AboutPage
