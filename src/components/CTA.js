import React from "react"
import { css } from "@emotion/core"

export default ({ isFooter }) => {
  const link = <a href="sms:6177444640">617-744-4640</a>

  if(isFooter) {
    return (
      <p
        css={css`
          line-height: 1.5;
          margin-top: 72px;
          padding-top: 24px;
          border-top: 2px solid var(--accent-light);
        `}
      >
        Make your studying easier. Text “chem” to {link} to be notified every time there's a new study guide for you. 
      </p>
    )
  }

  return (
    <div
      css={css`
        background-color: var(--background);
        padding: 16px;
        border-radius: 6px;
        box-shadow: 0px 2px 8px var(--shadow);
        border: 2px solid white;
        max-width: max-content;
      `}
    >
      <p
        css={css`
          line-height: 1.5;
          margin: 0;
        `}
      >
        Text “chem” to {link} to be notified of new study guides.
      </p>
    </div>
  )
}