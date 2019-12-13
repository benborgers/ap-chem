import React from "react"

const makeId = text => text.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim().replace(/ /g,"-")

export const h1 = ({ children }) => <h1 id={makeId(children)}>{children}</h1>

export const h2 = ({ children }) => <h2 id={makeId(children)}>{children}</h2>

export const h3 = ({ children }) => <h3 id={makeId(children)}>{children}</h3>