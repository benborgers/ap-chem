import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Head from "../components/Head"
import GlobalStyles from "../components/GlobalStyles"
import Layout from "../components/Layout"

export default ({ pageContext }) => {
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
          dangerouslySetInnerHTML={{ __html: pageContext.html }}
          css={css`
            h1, h2, h3, p {
              font-family: var(--font);
            }

            p {
              color: var(--text-300);
            }

            a {
              color: inherit;
              font: inherit;
            }
          `}
        />
      </Layout>
    </>
  )
}