import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { shoutManager } from "../model/shout_manager"

import Layout from "./layout"
import SEO from "./seo"

import ShoutWrite from "./shout_write"
import ShoutRead from "./shout_read"

const Index: React.FC<{ lang: string }> = ({ lang }) => {
  const displayedTime = Date.now()

  const data = useStaticQuery<GatsbyTypes.DonkeyImageQuery>(graphql`
    query DonkeyImage {
      allFile(filter: { base: { eq: "icon.png" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 512, maxHeight: 512) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <IndexComponent
      lang={lang}
      donkeyImage={data}
      pageDisplayedTime={displayedTime}
    />
  )
}

const IndexComponent: React.FC<{
  lang: string
  donkeyImage: GatsbyTypes.DonkeyImageQuery
  pageDisplayedTime: number
}> = ({ lang, donkeyImage, pageDisplayedTime }) => {
  const [_, setIsFirstTimeShouted] = useState(false)

  return (
    <Layout lang={lang}>
      <SEO />
      <WriteAndRead
        donkeyImage={donkeyImage}
        pageDisplayedTime={pageDisplayedTime}
        setIsFirstTimeShouted={setIsFirstTimeShouted}
      />
    </Layout>
  )
}

const WriteAndRead: React.FC<{
  donkeyImage: GatsbyTypes.DonkeyImageQuery
  pageDisplayedTime: number
  setIsFirstTimeShouted: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ donkeyImage, pageDisplayedTime, setIsFirstTimeShouted }) => {
  const entries = shoutManager.get()
  const size = shoutManager.getSize()
  const [_, setLastUpdateCount] = useState(0)

  const iconImage = donkeyImage.allFile.edges?.[0].node.childImageSharp

  return (
    <>
      <ShoutWrite
        setLastUpdateCount={setLastUpdateCount}
        iconImage={iconImage}
        setIsFirstTimeShouted={setIsFirstTimeShouted}
      />
      <div
        className={`max-w-md mx-2 ${
          size > 0 ? "my-4" : ""
        } sm:mx-auto flex flex-col-reverse gap-2 divide-y divide-y-reverse divide-gray-300 dark:divide-gray-500`}
      >
        {Array.from({ length: size }, () => {
          const entry = entries.next()
          if (!entry.done) {
            const [id, { text, timestamp }] = entry.value
            return (
              <ShoutRead
                key={id}
                text={text}
                timestamp={timestamp}
                iconImage={iconImage}
                animate={timestamp.getTime() > pageDisplayedTime}
              />
              // Index ページ表示時刻よりも Shout 時刻のほうが後である時のみアニメーションする。他ページから Index ページに戻ってきた際のアニメーションを抑制するため。
            )
          }
        })}
      </div>
    </>
  )
}

export default Index
