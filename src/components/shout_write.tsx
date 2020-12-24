import React, { useState } from "react"
import Img from "gatsby-image"
import i18n from "i18next"

import { shoutManager } from "../model/shout_manager"

export const ShoutWrite: React.FC<{
  setLastUpdateCount: React.Dispatch<React.SetStateAction<number>>
  iconImage: GatsbyTypes.DonkeyImageQuery["allFile"]["edges"][0]["node"]["childImageSharp"]
  setIsFirstTimeShouted: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setLastUpdateCount, iconImage, setIsFirstTimeShouted }) => {
  const [text, setText] = useState("")

  const setShout = (text: string) => {
    shoutManager.set(text)
    setLastUpdateCount(shoutManager.getSize())
    setIsFirstTimeShouted(shoutManager.getSize() > 0)
    setText("")
  }

  return (
    <div className="bg-gray-200 dark:bg-gray-700 py-4">
      <div className="max-w-md mx-2 sm:mx-auto flex flex-col gap-2">
        <label
          className="text-gray-1000 dark:text-gray-0"
          htmlFor="Shout_textarea"
        >
          {i18n.t("Write-label")}
        </label>
        <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
          {iconImage?.fluid && (
            <div className="col-end-2">
              <Img fluid={iconImage.fluid} />
            </div>
          )}
          <textarea
            id="Shout_textarea"
            className="col-start-2 col-end-7 sm:col-end-9 h-20 p-2 rounded-sm dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 bg-gray-0 dark:bg-gray-600 ring-primary-600 dark:ring-primary-400 focus:ring-2 resize-none"
            placeholder={i18n.t("Write-placeholder")}
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyUp={e => {
              if (text && e.ctrlKey && e.key === "Enter") {
                setShout(text)
              }
            }}
          ></textarea>
        </div>
        <button
          className="self-end px-3 py-1 rounded-sm bg-primary-700 disabled:bg-gray-500 dark:bg-primary-400 dark:disabled:bg-gray-600 text-gray-0 dark:text-primary-900 dark:disabled:text-gray-300 font-bold ring-primary-600 dark:ring-primary-400 focus:ring-4 transition transform focus:translate-y-0.5"
          disabled={!text}
          onClick={() => setShout(text)}
        >
          {i18n.t("Shout-button")}
        </button>
      </div>
    </div>
  )
}

export default ShoutWrite
