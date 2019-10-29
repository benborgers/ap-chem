import React from "react"
import { css } from "@emotion/core"

export default ({ emoji = "💡", children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 8px;

        background-color: white;
        padding: 24px;
        border-radius: 6px;
        box-shadow: 0px 2px 8px var(--shadow);
        border: 1px solid var(--text-100);
      `}
    >
      <span
        css={css`
          font-size: 1.1rem;
          align-self: center;
        `}
      >
        {emoji}
      </span>

      <p
        css={css`
          margin: 0 !important;
        `}
      >
        {children}
      </p>
    </div>
  )
}