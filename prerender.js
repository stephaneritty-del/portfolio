// Runs after `vite build`. Renders the React app to HTML and writes it into
// dist/index.html, so the page has real content before JavaScript runs.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const templatePath = path.join(root, 'dist', 'index.html')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render } = await import(ssrEntry)
const template = fs.readFileSync(templatePath, 'utf8')
const placeholder = '<div id="root"></div>'

if (!template.includes(placeholder)) {
  throw new Error(`prerender: could not find ${placeholder} in dist/index.html`)
}

const html = template.replace(placeholder, `<div id="root">${render()}</div>`)
fs.writeFileSync(templatePath, html)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`prerender: wrote ${(html.length / 1024).toFixed(0)} KB of HTML to dist/index.html`)
