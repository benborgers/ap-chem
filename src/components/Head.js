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
      <meta property="og:image" content="https://images.unsplash.com/photo-1532094349884-543bc11b234d?fit=crop&w=1200&h=630&q=80&fm=png" />

      <meta property="twitter:card" content="summary_large_image" />

      <link rel="icon" href="/icon.png" />
    </Helmet>
  )
}