const { promises: fs } = require("fs")
const path = require("path")
const RSS = require("rss")
const matter = require("gray-matter")

async function generate() {
  const feed = new RSS({
    title: "Jimuel Palaca",
    site_url: "https://jimuelpala.ca",
    feed_url: "https://jimuelpala.ca/feed.xml",
  })

  const posts = await fs.readdir(path.join(__dirname, "..", "pages"))

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith("index.")) return

      const content = await fs.readFile(
        path.join(__dirname, "..", "pages", name)
      )
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: "/" + name.replace(/\.mdx?/, ""),
        date: frontmatter.data.date,
      })
    })
  )

  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }))
}

generate()
