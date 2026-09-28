// Runs after `vite build`. Renders every page of the site to static HTML
// (dist/index.html, dist/work/<slug>.html, dist/ai-apps.html, dist/404.html),
// with the right title, description and share tags for each page.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(root, 'dist')
const SITE = 'https://stephaneritty.com'

const { pages } = await import(path.join(root, 'dist-ssr', 'entry-server.js'))
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) {
  throw new Error(`prerender: could not find ${placeholder} in dist/index.html`)
}

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function setMeta(html, page) {
  const url = SITE + (page.path === '/' ? '/' : page.path)
  const t = escape(page.title)
  const d = escape(page.description)
  html = html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`)
  if (page.noindex) {
    html = html.replace('</head>', '    <meta name="robots" content="noindex" />\n  </head>')
  }
  return html
}

for (const page of pages) {
  const html = setMeta(template, page).replace(placeholder, `<div id="root">${page.html()}</div>`)
  const out = path.join(dist, page.file)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
  console.log(`prerender: ${page.path.padEnd(32)} → dist/${page.file} (${(html.length / 1024).toFixed(0)} KB)`)
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`prerender: wrote ${pages.length} pages`)
