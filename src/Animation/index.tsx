import * as React from "react";
import { sectionStyle, percentStyle } from "./style";
import { useEffect, useRef, useState } from "react";
import { useWheelHookContentColor } from "../hooks/useWheelHookContentColor";
import { useWheelCalcSectionPercentage } from "../hooks/useWheelCalcSectionPercentage";
import { useScrollToCapture } from "../hooks/useScrollToCapture";
import useRestoreScrollToUncapture from "../hooks/useRestoreScrollToUncapture";
import useScrollDirection from "../hooks/useScrollDirection";

const colors = ["red", "green", "blue", "orange", "grey"];

const Animation: React.FC = () => {
  const sectionReference = useRef<HTMLElement>(null);
  const [content, colorsIndex] = useWheelHookContentColor(colors.length);
  const percent = useWheelCalcSectionPercentage(sectionReference);
  const [isCaptured, restoreScrollTo] = useScrollToCapture(
    sectionReference,
    percent
  );
  const scrollDirection = useScrollDirection();
  useRestoreScrollToUncapture(isCaptured, () =>
    restoreScrollTo(scrollDirection === "scrolling up" ? "up" : "down")
  );

  return (
    <section ref={sectionReference} css={sectionStyle}>
      <h2>{content}</h2>
      <h2 css={percentStyle(colors[colorsIndex])}>{percent}</h2>
    </section>
  );
};

export { Animation };
export default Animation;
