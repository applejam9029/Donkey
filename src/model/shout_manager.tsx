let shoutCounter = 0
const shoutData: Map<number, Shout> = new Map()

export interface Shout {
  text: string
  timestamp: Date
}

export const shoutManager = {
  set: (text: string) => {
    shoutData.set(shoutCounter, {
      text,
      timestamp: new Date(),
    })
    shoutCounter++
  },
  get: () => shoutData.entries(),
  getSize: () => shoutData.size,
}
