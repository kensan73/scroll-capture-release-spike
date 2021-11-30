import * as React from "react"
import { sectionStyle, percentStyle } from "./style"
import { useEffect, useRef, useState } from "react"

const calcPercentage = (
  sectionRect: { top: number; bottom: number },
  clientRect: { top: number; bottom: number }
): string => {
  const adjustedRect = {
    top: sectionRect.top,
    bottom: sectionRect.bottom,
  }
  if (
    sectionRect.top >= clientRect.top &&
    sectionRect.bottom <= clientRect.bottom
  ) {
    // it is fully within the clientArea return 100%
    return "100"
  }

  if (
    sectionRect.top >= clientRect.bottom ||
    sectionRect.bottom <= clientRect.top
  ) {
    // it is fully outside the clientArea return 0%
    return "0"
  }

  // clip the section to the client area
  // calculate adjusted to actual section rect
  // to get % seen
  if (
    sectionRect.top >= clientRect.top &&
    sectionRect.top <= clientRect.bottom
  ) {
    adjustedRect.bottom = clientRect.bottom
  } else {
    adjustedRect.top = clientRect.top
  }

  let percent
  percent =
    ((adjustedRect.bottom - adjustedRect.top) /
      (sectionRect.bottom - sectionRect.top)) *
    100

  return (percent > 98 ? 100 : percent.toPrecision(2)) + ""
}

const colors = ["red", "green", "blue"]

const Animation: React.FC = () => {
  const [content, setContent] = useState("")
  const [percent, setPercent] = useState("")
  const [colorsIndex, setColorsIndex] = useState(0)
  const sectionReference = useRef<HTMLElement>(null)

  useEffect(() => {
    const onwheel = (event: WheelEvent) => {
      let content = "down"
      if (event.deltaY < 0) {
        content = "up"
      }
      setContent(content)
      setColorsIndex((prev) => {
        if (prev === colors.length - 1) return 0
        return prev + 1
      })
    }

    window.addEventListener("wheel", onwheel)

    return () => window.removeEventListener("wheel", onwheel)
  }, [setColorsIndex])
  useEffect(() => {
    const onwheel = (event: WheelEvent) => {
      if (sectionReference.current == null) return
      /*
      get the absolute position top and bottom
      get the absolute position of the element
       */
      const sectionRect = {
        top: sectionReference.current.offsetTop,
        bottom:
          sectionReference.current.offsetTop +
          sectionReference.current.getBoundingClientRect().height,
      }
      const clientRect = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      }
      const percent = calcPercentage(sectionRect, clientRect)
      setPercent(percent)
    }

    window.addEventListener("scroll", onwheel)

    return () => window.removeEventListener("wheel", onwheel)
  }, [sectionReference])
  return (
    <section ref={sectionReference} css={sectionStyle}>
      <h2>{content}</h2>
      <h2 css={percentStyle(colors[colorsIndex])}>{percent}</h2>
    </section>
  )
}

export { Animation }
export default Animation
