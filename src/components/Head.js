import React from "react"
import { Helmet } from "react-helmet-async"

export default ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={encodeURI(`https://og-image.glitch.me/${title.split(":").slice(-1)[0].trim()}/hsl(225, 65%, 37%)/hsl(43, 28%, 95%)`)} />

      <meta property="twitter:card" content="summary_large_image" />

      <link rel="icon" href="/icon.png" />
    </Helmet>
  )
}
