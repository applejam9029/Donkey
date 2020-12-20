import React from "react"
import i18n from "i18next"

import { shoutManager } from "../model/shout_manager"

export const AboutAndPrivacy: React.FC = () => {
  const color =
    shoutManager.getSize() > 0
      ? {
          header: "text-gray-1000 dark:text-gray-100",
          text: "text-gray-600 dark:text-gray-400",
          link: "text-secondary-900 dark:text-secondary-400",
        }
      : {
          header: "text-gray-0 dark:text-gray-100",
          text: "text-gray-300 dark:text-gray-400",
          link: "text-secondary-400",
        }

  return (
    <>
      <div>
        <h2 className={`text-lg font-normal ${color.header}`}>
          {i18n.t("About-header")}
        </h2>
        <p className={color.text}>{i18n.t("About-text")}</p>
        <p className={color.text}>
          {i18n.t("About-made_for-beforelink")}
          <a
            href="https://www.gatsbyjs.com/silly-site-challenge"
            className={color.link}
          >
            #SillySiteChallenge
          </a>
          {i18n.t("About-made_for-afterlink")}
        </p>
      </div>
      <div>
        <h2 className={`text-lg font-normal ${color.header}`}>
          {i18n.t("Privacy-header")}
        </h2>
        <p className={color.text}>{i18n.t("Privacy-text")}</p>
      </div>
    </>
  )
}

export default AboutAndPrivacy
