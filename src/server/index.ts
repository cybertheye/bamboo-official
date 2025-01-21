import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import Database from 'better-sqlite3'

// Create database connection
const db = new Database('database.db')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 5001

// 处理报价验证请求
app.get('/validate-quote/:code', (req, res) => {
  const { code } = req.params
  const stmt = db.prepare('SELECT * FROM quotes WHERE code = ?')
  console.log(code)
  const quote = stmt.get(code)
  console.log(quote)
  if (quote) {
    res.status(200).end()
  } else {
    res.status(404).end()
  }
})

// 处理报价详情请求
app.get('/quote/:code', (req, res) => {
  const { code } = req.params
  const stmt = db.prepare('SELECT file_path FROM quotes WHERE code = ?')
  const quote = stmt.get(code)

  if (quote) {
    try {
      const filePath = path.join(__dirname, '../../', quote.file_path)
      const content = fs.readFileSync(filePath, 'utf-8')
      res.status(200).type('text/plain').send(content)
    } catch (error) {
      res.status(500).send(error instanceof Error ? error.message : 'Server error')
    }
  } else {
    res.status(404).end()
  }
})

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`)
})
