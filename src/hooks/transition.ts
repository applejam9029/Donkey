import { useEffect, useState } from "react"

export const useTransition = ({
  enterFrom,
  enterTo,
}: {
  enterFrom: string
  enterTo: string
}) => {
  const [aniamtionTarget, setAnimationTarget] = useState(enterFrom)

  useEffect(() => {
    setTimeout(setAnimationTarget.bind(null, enterTo), 50)
  }, [])

  return aniamtionTarget
}
