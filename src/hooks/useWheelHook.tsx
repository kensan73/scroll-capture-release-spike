import { useEffect, useState } from "react"

const useWheelHook = (maxColors: number): [string, number] => {
  const [content, setContent] = useState("")
  const [colorsIndex, setColorsIndex] = useState(0)
  useEffect(() => {
    const onwheel = (event: WheelEvent) => {
      let content = "down"
      if (event.deltaY < 0) {
        content = "up"
      }
      setContent(content)
      setColorsIndex((prev) => {
        if (prev === maxColors - 1) return 0
        return prev + 1
      })
    }

    window.addEventListener("wheel", onwheel)

    return () => window.removeEventListener("wheel", onwheel)
  }, [])

  return [content, colorsIndex]
}

export { useWheelHook }
export default useWheelHook
