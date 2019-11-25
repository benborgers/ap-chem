import React from "react"
import katex from "katex"

import "katex/dist/katex.min.css"

export default ({ text }) => {
  const html = katex.renderToString(text, {
    throwOnError: false
  })

  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}