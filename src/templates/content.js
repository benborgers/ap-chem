import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { MDXProvider } from "@mdx-js/react"

import Head from "../components/Head"
import GlobalStyles from "../components/GlobalStyles"
import Layout from "../components/Layout"
import CTA from "../components/CTA"

import Equation from "../components/Equation"
import InlineMath from "../components/InlineMath"
import Callout from "../components/Callout"
import Table from "../components/Table"

const shortcodes = { Equation, InlineMath, Callout, Table }

export default ({ pageContext, children }) => {
  const frontmatter = pageContext.frontmatter

  return (
    <>
      <Head
        title={`Unit ${frontmatter.unit}: ${frontmatter.title}`}
        description={`Explanation of ${frontmatter.title.toLowerCase()} in AP Chemistry.`}
      />

      <GlobalStyles />

      <Layout>
          <header
            css={css`
              margin-bottom: 64px;

              @media (max-width: 768px) {
                margin-bottom: 36px;
              }
            `}
          >
            <Link
              to="/"
              css={css`
                text-decoration: none;
              `}
            >
              <p
                css={css`
                  color: var(--accent);
                  background-color: var(--accent-light);
                  padding: 4px 8px;
                  border-radius: 4px;
                  font-weight: 500;
                  font-size: .95rem;
                  display: inline-block;
                  margin-bottom: 0;
                `}
              >
                Unit {frontmatter.unit}
              </p>
            </Link>

            <h1
              css={css`
                margin-top: 12px;
                color: var(--text-500);
                line-height: 1.2;
              `}
            >
              {frontmatter.title}
            </h1>

            <CTA />
          </header>

          <div
            css={css`
              h1, h2, h3 {
                line-height: 1.3;
              }

              h1:first-of-type {
                margin-top: 0;
              }

              h1 {
                color: var(--text-500);
                font-size: 1.6rem;
                margin-top: 64px;
                margin-bottom: 24px;
              }

              h2 {
                font-size: 1.3rem;
                margin-top: 32px;
              }

              h3 {
                text-transform: uppercase;
                font-size: .9rem;
                margin-top: 32px;
              }

              p, .callout-text, li {
                line-height: 1.5;
              }

              li {
                margin-bottom: 8px;
              }

              p, .callout-text {
                margin-bottom: 16px;
              }

              code {
                background-color: var(--text-100);
                padding: 0 4px;
              }

              img :not(.callout-emoji) {
                width: 600px;
                max-width: 100%;
                margin: 16px 0;
              }
            `}
          >
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </div>

          <CTA isFooter={true} />
      </Layout>
    </>
  )
}
