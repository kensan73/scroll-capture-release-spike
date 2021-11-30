import * as React from "react"
import { sectionStyle } from "./style"
// import * as ReactDOM from "react-dom";

interface QuoteProperties {
  quote: string
}

const Quote: React.FC<QuoteProperties> = ({ quote }) => (
  <section css={sectionStyle}>
    <h2>{quote}</h2>
  </section>
)

export { Quote }
export default Quote
