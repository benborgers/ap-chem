const fs = require("fs")
const fetch = require("node-fetch")
const path = require("path")

let data

exports.onPreBootstrap = async () => {
  const table = await (await fetch("https://potion-api.now.sh/api/table?id=9538c647c3f34ee996e745e411b1b63e")).json()
  
  for(const entry of table) {
    const html = await (await fetch(`https://potion-api.now.sh/api/html?id=${entry.id}`)).text()
    entry.html = html
  }

  data = table

  fs.writeFileSync("./data.json", JSON.stringify(table))
}

exports.createPages = ({ actions: { createPage } }) => {
  data.forEach(entry => {
    createPage({
      path: `/${entry.fields.Slug}/`,
      component: path.resolve("./src/templates/content.js"),
      context: entry
    })
  })
}