import React from "react"
import Img from "gatsby-image"

import { Shout } from "../model/shout_manager"

export const ShoutRead: React.FC<
  Shout & {
    iconImage: GatsbyTypes.DonkeyImageQuery["allFile"]["edges"][0]["node"]["childImageSharp"]
  }
> = ({ text, timestamp, iconImage }) => {
  return (
    <div className="py-2 grid grid-cols-8 sm:grid-cols-8 gap-2">
      {iconImage?.fluid && (
        <div className="col-end-2">
          <Img fluid={iconImage.fluid} />
        </div>
      )}
      <div className="col-start-2 col-end-9 sm:col-end-9 flex flex-col whitespace-pre-wrap gap-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          <span className="mr-2">@donkey</span>
          <time dateTime={timestamp.toISOString()}>
            {timestamp.toLocaleString()}
          </time>
        </p>
        <p className="text-gray-1000 dark:text-gray-0 break-words">{text}</p>
      </div>
    </div>
  )
}

export default ShoutRead
