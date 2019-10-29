import React from "react"
import { css, Global } from "@emotion/core"

import "katex/dist/katex.min.css"
import { BlockMath } from "react-katex"

export default ({ text }) => {
  return (
    <>
      <Global
        styles={css`
          .katex * {
            font-family: serif;
          }

          .katex {
            margin: 24px 0;
          }
        `}
      />

      <BlockMath math={text} />
    </>
  )
}