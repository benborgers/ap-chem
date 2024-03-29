import React from "react"
import { css } from "@emotion/core"

export default ({ emoji = "💡", children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: max-content auto;
        grid-column-gap: 24px;

        background-color: white;
        padding: 24px;
        border-radius: 6px;
        box-shadow: 0px 2px 8px var(--shadow);
        border: 1px solid var(--text-100);

        @media (max-width: 450px) {
          grid-template-columns: 1fr;
          grid-template-rows: max-content auto;
          grid-row-gap: 16px;
        }
      `}
    >
      <img
        src={`https://emojicdn.elk.sh/${emoji}`}
        alt=""
        className="callout-emoji"
        css={css`
          max-width: 1.2rem;
          align-self: center;
        `}
      />

      <div
        className="callout-text"
        css={css`
          margin: 0 !important;

          *:last-of-type {
            margin-bottom: 4px;
          }
        `}
      >
        {children}
      </div>
    </div>
  )
}