import React from "react"
import { css } from "@emotion/core"

export default ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: minmax(16px, 1fr) minmax(0, 768px) minmax(16px, 3fr);
      `}
    >

      <div
        css={css`
          grid-column: 2;
          margin-top: 80px;
          margin-bottom: 64px;

          @media (max-width: 768px) {
            margin-top: 24px;
          }
        `}
      >
        {children}
      </div>
    
    </div>
  )
}