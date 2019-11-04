import React from "react"
import { css } from "@emotion/core"

export default ({ emoji = "💡", children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 24px;

        background-color: white;
        padding: 24px;
        border-radius: 6px;
        box-shadow: 0px 2px 8px var(--shadow);
        border: 1px solid var(--text-100);

        @media (max-width: 450px) {
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
          grid-row-gap: 16px;
        }
      `}
    >
      <img
        src={`https://emojicdn.elk.sh/${emoji}`}
        alt=""
        css={css`
          max-width: 1.2rem;
          align-self: center;
        `}
      />

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