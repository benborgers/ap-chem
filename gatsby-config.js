module.exports = {
  siteMetadata: {
    siteUrl: "https://chem.elk.sh"
  },
  plugins: [
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-emotion",
    "@rhysforyou/gatsby-plugin-react-helmet-async",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          pages: require.resolve("./src/templates/content.js")
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: "gatsby-plugin-fathom",
      options: {
        siteId: "LLDKMLXI"
      }
    },
    {
      resolve: "@benborgers/gatsby-plugin-og-image",
      options: {
        domain: "https://chem.elk.sh",
        fn: title => {
          const template = text => {
            return `
              <main>
                <h1>
                  ${text}
                </h1>
              </main>

              <style>
                * {
                  margin: 0;
                  padding: 0;
                }

                main {
                  height: 100vh;
                  display: grid;
                  place-items: center center;
                  background-color: hsl(225, 65%, 37%);
                }
                
                h1 {
                  font-size: 44px;
                  font-family: sans-serif;
                  color: white;
                  line-height: 1.3;
                }
              </style>
            `
          }

          if(title === "AP Chemistry") {
            return template("Summaries and explanations<br>of units in AP Chemistry.")
          } else {
            return template(title.split(":")[1])
          }
        }
      }
    }
  ]
}
