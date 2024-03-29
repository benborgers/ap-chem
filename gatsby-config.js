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
    }
  ]
}
