import React from "react"
import { css, Global } from "@emotion/core"
import { Helmet } from "react-helmet-async"

import "normalize.css"

export default () => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Helmet>

      <Global
        styles={css`
          p, h1, h2, h3, div, input, textarea, button {
            font-family: "Inter", sans-serif;
            color: var(--text-300);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-tap-highlight-color: transparent;
            box-sizing: border-box;
          }

          a {
            color: inherit;
          }

          body {
            --text-500: hsl(225, 30%, 15%);
            --text-300: hsl(225, 10%, 35%);
            --text-200: hsl(225, 15%, 75%);
            --text-100: hsl(225, 30%, 90%);

            --accent: hsl(225, 65%, 37%);
            --accent-light: hsl(225, 50%, 90%);

            --background: hsl(43, 28%, 95%);

            --shadow: hsl(225, 0%, 91%);

            background-color: var(--background);
            border-top: 8px solid var(--accent);
          }

          ::selection {
            background-color: var(--accent-light);
            color: var(--text-500);
          }
        `}
      />
    </>
  )
}