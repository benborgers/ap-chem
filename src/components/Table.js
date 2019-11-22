import React from "react"
import { css } from "@emotion/core"

export default ({ data }) => {
  const transformedData = []

  for(const heading in data) {
    transformedData.push({
      heading,
      rows: data[heading]
    })
  }

  const rows = transformedData[0].rows.length + 1

  const cellStyle = `
    padding: 16px;
    margin: 0 !important;

    border-right: 2px solid var(--text-100);
    border-bottom: 2px solid var(--text-100);

    :nth-last-of-type(-n+${rows}) {
      border-right: none;
    }

    :nth-of-type(${rows}n) {
      border-bottom: none;
    }

    :nth-of-type(-n+${rows}) {
      padding-left: 0;
    }
  `

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(${transformedData.length}, minmax(192px, 1fr));
        grid-template-rows: repeat(${rows}, auto);
        grid-auto-flow: column;

        margin-bottom: 48px;
        overflow: scroll;
      `}
    >
      {transformedData.map(column => (
        <React.Fragment
          key={column.heading}
        >
          <p
            css={css`
              ${cellStyle}
              font-weight: 600;
            `}
          >
            {column.heading}
          </p>

          {column.rows.map(row => (
            <p
              key={row}
              dangerouslySetInnerHTML={{ __html: row.replace(/\n/g, "<br />")}}
              css={css`
                ${cellStyle}
              `}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}