import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Head from "../components/Head"
import GlobalStyles from "../components/GlobalStyles"
import Layout from "../components/Layout"

export default ({ pageContext }) => {
  const chunks = pageContext.html.replace(/<h3>/g, "!s!<h3>").replace(/<h1>/g, "!s!<h1>").split("!s!")

  const array = []

  for(const chunk of chunks) {
    if(chunk.startsWith("<h3>")) {
      array.push(`<details>${chunk.replace("<h3>", "<summary><h3>").replace("</h3>", "</h3></summary>")}</details>`)
    } else {
      array.push(chunk)
    }
  }

  const html = array.join("")

  return (
    <>
      <Head
        title={pageContext.fields.Title + " - AP Chem"}
      />

      <GlobalStyles />

      <Layout>
        <header
          css={css`
            margin-bottom: 48px;
          `}
        >
          <Link
            to="/"
            css={css`
              display: block;
              background-color: var(--accent-light);
              color: var(--accent);
              max-width: max-content;
              font-family: var(--font);
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 14px;
              font-weight: 500;
              text-decoration: none;
              margin-bottom: 8px;
            `}
          >
            AP Chem
          </Link>

          <h1
            css={css`
              font-family: var(--font);
              margin-top: 0;
            `}
          >
            {pageContext.fields.Title}
          </h1>
        </header>

        <main
          dangerouslySetInnerHTML={{ __html: html }}
          css={css`
            h1, h2, h3, p {
              font-family: var(--font);
            }

            p {
              color: var(--text-300);
              line-height: 1.5;
            }

            a {
              color: inherit;
              font: inherit;
            }

            img {
              max-width: 100%;
            }

            .callout {
              display: grid;
              grid-template-columns: 20px 1fr;
              grid-column-gap: 24px;
              background-color: white;
              border: 1px solid var(--text-100);
              max-width: max-content;
              padding: 16px 24px;
              border-radius: 4px;
              box-shadow: 0px 2px 8px var(--shadow);
              margin: 24px 0;
            }

            .callout * {
              align-self: center;
              margin: 0;
            }

            h1 {
              font-size: 32px;
              margin-top: 64px;
              line-height: 1.3;
            }

            details, summary {
              outline: none;
              max-width: max-content;
            }

            summary {
              cursor: pointer;
            }

            summary::-webkit-details-marker {
              display: none;
            }

            summary h3 {
              color: var(--text-500);
              font-size: 16px;
              font-weight: 600;
              line-height: 1.5;
            }

            summary h3::before {
              content: "→";
              display: inline-block;
              margin-right: 8px;
              color: var(--text-200);
            }

            details[open] summary h3::before {
              content: "↓";
            }

            @media (max-width: 500px) {
              h1 {
                font-size: 24px;
              }
            }
          `}
        />
      </Layout>
    </>
  )
}