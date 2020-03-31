import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Head from "../components/Head"
import GlobalStyles from "../components/GlobalStyles"
import Layout from "../components/Layout"

import data from "../../data"

export default () => {
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
              margin-top: 0;
              margin-bottom: 8px;
              font-family: var(--font);
            `}
          >
            AP Chemistry
          </h1>

          <p
            css={css`
              margin: 0;
              line-height: 1.5;
              font-family: var(--font);
              color: var(--text-300);

              * {
                color: var(--text-300);
                text-decoration-color: var(--text-200);
              }
            `}
          >
            {"Unit summaries by "}
            <a href="https://benborgers.com">
              Ben Borgers
            </a>
            {"."}<br />{"I'm in the process of rewriting this site, but for now the old version is "}
            <a href="https://ap-chem-33g29zpmd.now.sh">
              here
            </a>
            {"."}
          </p>
        </header>

        <main>
          {data.map(entry => (
            <Link
              to={`/${entry.fields.Slug}/`}
              css={css`
                text-decoration: none;
              `}
              key={entry.fields.Slug}
            >
              <div
                css={css`
                  background-color: white;
                  padding: 16px 24px;
                  border: 1px solid var(--text-100);
                  border-radius: 4px;
                  box-shadow: 0px 2px 8px var(--shadow);
                  margin-bottom: 24px;
                `}
              >
                <p
                  css={css`
                    color: var(--text-500);
                    font-size: 20px;
                    font-family: var(--font);
                    color: var(--accent);
                    font-weight: 500;
                  `}
                >
                  {entry.fields.Title}
                </p>
              </div>
            </Link>
          ))}
        </main>
      </Layout>
    </>
  )
}