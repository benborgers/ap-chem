import React from "react"
import { css } from "@emotion/core"
import katex from "katex"

import "katex/dist/katex.min.css"

export default ({ text }) => {
  const html = katex.renderToString(text, {
    displayMode: true,
    throwOnError: false
  })

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      css={css`
        margin: 32px 0;
        max-width: 100%;
        overflow: scroll;
      `}
    />
  )
}