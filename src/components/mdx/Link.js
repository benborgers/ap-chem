import React from "react"
import { Link } from "gatsby"

export default ({ href, children }) => {
  if(href.startsWith("/")) {
    return (
      <Link to={href}>{children}</Link>
    )
  } else {
    return (
      <a href={href}>{children}</a>
    )
  }
}