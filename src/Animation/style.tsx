import { css, SerializedStyles } from "@emotion/core"

const sectionStyle = css`
  background-color: yellow;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
  }
`

const percentStyle = (color: string): SerializedStyles => css`
  color: ${color};
`

export { sectionStyle, percentStyle }
