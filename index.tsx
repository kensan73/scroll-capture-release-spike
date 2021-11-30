import * as React from "react";
import * as ReactDOM from "react-dom";
import Animation from "./src/Animation";
import Quote from "./src/Quote";

const quote = "All good things come to those who wait.";

const quoteProperties = {
  quote,
};

const Root = () => (
  <>
    <Quote {...quoteProperties} />
    <Quote {...quoteProperties} />
    <Quote {...quoteProperties} />
    <Quote {...quoteProperties} />
    <Quote {...quoteProperties} />
    <Quote {...quoteProperties} />
    <Animation />
    <Quote {...quoteProperties} />
    <Quote {...quoteProperties} />
    <Quote {...quoteProperties} />
    <Quote {...quoteProperties} />
    <Quote {...quoteProperties} />
  </>
  // <div
  //   css={{
  //     display: "grid",
  //     placeItems: "center",
  //     width: "calc(100vw - 16px)",
  //     height: "calc(100vh - 16px)",
  //     color: "blue",
  //   }}
  // >
  //   Parcel + Emotion + TypeScript example
  // </div>
);

ReactDOM.render(<Root />, document.getElementById("root"));
