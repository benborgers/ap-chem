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
      resolve: "gatsby-plugin-fathom",
      options: {
        siteId: "LLDKMLXI"
      }
    }
  ]
}
