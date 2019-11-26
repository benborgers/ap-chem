import React from "react"
import { css } from "@emotion/core"

export default ({ isFooter }) => {
  return (
    <p
      css={css`
        line-height: 1.6;

        ${isFooter ? `
          margin-top: 72px;
          padding-top: 24px;
          border-top: 2px solid var(--accent-light);
        `
        :
        `
          font-style: italic;
        `}
      `}
    >
      {isFooter && <>Make your studying easier.</>} Text “chem” to <a href="sms:6177444640">617-744-4640</a> to be notified {isFooter ? <>every time there's a new study guide for you</> : <>when new study guides are published</>}.
    </p>
  )
}