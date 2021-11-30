import * as React from "react";
import { sectionStyle, percentStyle } from "./style";
import { useEffect, useRef, useState } from "react";
import { useWheelHookContentColor } from "../hooks/useWheelHookContentColor";
import { useWheelCalcSectionPercentage } from "../hooks/useWheelCalcSectionPercentage";
import { useScrollToCapture } from "../hooks/useScrollToCapture";

const colors = ["red", "green", "blue", "orange", "grey"];

const Animation: React.FC = () => {
  const sectionReference = useRef<HTMLElement>(null);
  const [content, colorsIndex] = useWheelHookContentColor(colors.length);
  const percent = useWheelCalcSectionPercentage(sectionReference);
  const [isCaptured, restoreScrollTo] = useScrollToCapture(
    sectionReference,
    percent
  );

  useEffect(() => {
    if (!isCaptured) return;

    let handle = setTimeout(() => {
      clearTimeout(handle);
      restoreScrollTo();
    }, 5000);
  }, [isCaptured]);

  return (
    <section ref={sectionReference} css={sectionStyle}>
      <h2>{content}</h2>
      <h2 css={percentStyle(colors[colorsIndex])}>{percent}</h2>
    </section>
  );
};

export { Animation };
export default Animation;
