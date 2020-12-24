import React from "react"
import { Link } from "gatsby"
import i18n from "i18next"

import { shoutManager } from "../model/shout_manager"

import AboutAndPrivacy from "./description"

export const Footer: React.FC = () => {
  if (shoutManager.getSize() > 0) {
    return (
      <div className="max-w-md mx-2 sm:mx-auto py-6 flex divide-x divide-gray-500">
        <Link
          className="text-secondary-400 pr-2"
          to={`/${i18n.language}/about`}
        >
          {i18n.t("About-header")}
        </Link>
        <a
          href="https://github.com/applejam9029/Donkey"
          className="text-secondary-400 pl-2"
        >
          {i18n.t("Source-header")}
        </a>
      </div>
    )
  } else {
    return (
      <div className="max-w-md mx-2 sm:mx-auto py-6 flex flex-col gap-4">
        <AboutAndPrivacy />
        <div>
          <h2 className="text-lg font-normal text-gray-0 dark:text-gray-100">
            {i18n.t("Source-header")}
          </h2>
          <a
            href="https://github.com/applejam9029/Donkey"
            className="text-secondary-400"
          >
            {i18n.t("Source-text")}
          </a>
        </div>
      </div>
    )
  }
}

export default Footer
