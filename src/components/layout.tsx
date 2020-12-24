import React from "react"
import i18n from "i18next"

import en from "../lang/en"
import ja from "../lang/ja"

import { useTransition } from "../hooks/transition"

import Header from "./header"
import Footer from "./footer"

i18n.init({
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  resources: { en, ja },
})

export const Layout: React.FC<{ lang: string; isIndex?: boolean }> = ({
  lang,
  isIndex,
  children,
}) => {
  i18n.changeLanguage(lang)

  const animationTarget = useTransition({
    enterFrom: "scale-x-0",
    enterTo: "scale-x-100",
  })

  return (
    <div className="text-gray-1000 min-h-full flex flex-col divide-y dark:divide-gray-500">
      <header className="p-2 bg-gray-800 dark:bg-gray-900 shadow flex-grow-0">
        <Header lang={lang} isIndex={!!isIndex} />
      </header>
      <div
        className={`flex-grow-0 bg-gray-0 dark:bg-gray-800 transform transition-transform ${animationTarget}`}
      >
        {children}
      </div>
      <footer className="bg-gray-800 dark:bg-gray-900 shadow flex-grow">
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
