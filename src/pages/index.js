import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import Head from "../components/Head"
import GlobalStyles from "../components/GlobalStyles"
import Layout from "../components/Layout"

export default ({ data }) => {
  const pages = data.allMdx.edges.map(edge => edge.node.frontmatter)

  return (
    <>
      <Head
        title="AP Chemistry"
        description="Summaries and explanations of units in AP Chemistry."
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
          <h1
            css={css`
              color: var(--accent);
              margin-bottom: 8px;
            `}
          >
            AP Chemistry
          </h1>

          <p
            css={css`
              margin: 0;
              line-height: 1.4;
            `}
          >
            {"Unit summaries written by "}
            <a href="https://benborgers.com">
              Ben Borgers
            </a>
            {"."}
          </p>
        </header>

        <main>
          {pages.map(page => (
            <Link
              key={page.unit}
              to={`/unit-${page.unit}/`}
              css={css`
                text-decoration: none;
              `}
            >
              <div
                css={css`
                  background-color: white;
                  border: 1px solid var(--text-100);
                  margin-bottom: 24px;
                  padding: 24px;
                  border-radius: 6px;
                  box-shadow: 0px 2px 8px var(--shadow);
                `}
              >
                <p
                  css={css`
                    text-transform: uppercase;
                    margin: 0;
                    font-size: .9rem;
                    font-weight: 500;
                    margin-bottom: 8px;
                    color: var(--text-300);
                  `}
                >
                  Unit {page.unit}
                </p>

                <p
                  css={css`
                    margin: 0;
                    color: var(--accent);
                    font-size: 1.1rem;
                    font-weight: 500;
                  `}
                >
                  {page.title}
                </p>
              </div>
            </Link>
          ))}
        </main>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: {fields: frontmatter___unit}) {
      edges {
        node {
          frontmatter {
            unit
            title
          }
        }
      }
    }
  }
`
