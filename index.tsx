import * as React from "react";
import * as ReactDOM from "react-dom";

const Root = () => (
  <div
    css={{
      display: "grid",
      placeItems: "center",
      width: "calc(100vw - 16px)",
      height: "calc(100vh - 16px)",
      color: "blue",
    }}
  >
    Parcel + Emotion + TypeScript example
  </div>
);

ReactDOM.render(<Root />, document.getElementById("root"));
