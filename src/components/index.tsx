import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Transition } from "@headlessui/react"

import { shoutManager } from "../model/shout_manager"

import Layout from "./layout"
import SEO from "./seo"

import ShoutWrite from "./shout_write"
import ShoutRead from "./shout_read"

const Index: React.FC<{ lang: string }> = ({ lang }) => {
  const [entries, setEntries] = useState(shoutManager.get())
  const [size, setSize] = useState(shoutManager.getSize())

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

  const iconImage = data.allFile.edges?.[0].node.childImageSharp

  return (
    <Layout lang={lang}>
      <SEO />
      <ShoutWrite
        setEntries={setEntries}
        setSize={setSize}
        iconImage={iconImage}
      />
      <Transition show={true}>
        <div
          className={`max-w-md mx-2 sm:mx-auto flex flex-col-reverse gap-2 divide-y divide-y-reverse divide-gray-300 dark:divide-gray-500 ${
            size > 0 && "my-4"
          }`}
        >
          {Array.from({ length: size }, () => {
            const entry = entries.next()
            if (!entry.done) {
              const [id, { text, timestamp }] = entry.value
              return (
                <Transition.Child
                  key={`shout_read_${id}`}
                  className="transition ease-in-out duration-150 transform"
                  enterFrom="scale-y-0"
                  enterTo="scale-y-100"
                  leaveFrom="scale-y-100"
                  leaveTo="scale-y-0"
                >
                  <ShoutRead
                    text={text}
                    timestamp={timestamp}
                    iconImage={iconImage}
                  />
                </Transition.Child>
              )
            }
          })}
        </div>
      </Transition>
    </Layout>
  )
}

export default Index
