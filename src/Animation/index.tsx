import * as React from "react"
import { sectionStyle } from "./style"
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
  console.log(sectionRect, clientRect)

  let percent
  percent =
    ((adjustedRect.bottom - adjustedRect.top) /
      (sectionRect.bottom - sectionRect.top)) *
    100

  return (percent > 100 ? 100 : percent).toPrecision(2) + ""
}

const Animation: React.FC = () => {
  const [content, setContent] = useState("")
  const [percent, setPercent] = useState("")
  const sectionReference = useRef<HTMLElement>(null)

  useEffect(() => {
    const onwheel = (event: WheelEvent) => {
      let content = "down"
      if (event.deltaY < 0) {
        content = "up"
      }
      setContent(content)
    }

    window.addEventListener("wheel", onwheel)

    return () => window.removeEventListener("wheel", onwheel)
  }, [])
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
      // const adjustedRect = {
      //   top: sectionRect.top,
      //   bottom: sectionRect.bottom,
      // }
      // if (
      //   sectionRect.top >= clientRect.top &&
      //   sectionRect.top <= clientRect.bottom
      // ) {
      //   adjustedRect.bottom = clientRect.bottom
      // } else {
      //   adjustedRect.top = clientRect.top
      // }
      // console.log(sectionRect)
      // console.log(clientRect)
      // console.log("-----------")
      //
      // let percent: string
      // if (
      //   adjustedRect.top < clientRect.top &&
      //   adjustedRect.bottom < clientRect.top
      // ) {
      //   percent = "0"
      // } else if (
      //   adjustedRect.top > clientRect.bottom &&
      //   adjustedRect.bottom > clientRect.bottom
      // ) {
      //   percent = "0"
      // } else if (
      //   adjustedRect.top >= clientRect.top &&
      //   adjustedRect.bottom <= clientRect.bottom
      // ) {
      //   percent = "100"
      // } else {
      //   percent =
      //     (
      //       ((adjustedRect.bottom - adjustedRect.top) /
      //         (sectionRect.bottom - sectionRect.top)) *
      //       100
      //     ).toPrecision(2) + ""
      // }

      setPercent(percent)
    }

    window.addEventListener("scroll", onwheel)

    return () => window.removeEventListener("wheel", onwheel)
  }, [sectionReference])
  return (
    <section ref={sectionReference} css={sectionStyle}>
      <h2>{content}</h2>
      <h2>{percent}</h2>
    </section>
  )
}

export { Animation }
export default Animation
