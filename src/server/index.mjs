import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cors from 'cors'
import Database from 'better-sqlite3'



const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 获取数据库路径，支持环境变量配置
const dbPath = process.env.DATABASE_PATH || '/app/data/quotes.db'

// 确保数据库文件存在
try {
  fs.accessSync(dbPath, fs.constants.R_OK | fs.constants.W_OK)
  console.log(`Using database at: ${dbPath}`)
} catch (err) {
  console.error(`Database file not accessible at ${dbPath}:`, err)
  process.exit(1)
}

const db = new Database(dbPath)



const app = express()
const port = process.env.PORT || 5001

// Enable CORS for all routes
app.use(cors())



// 处理报价验证请求
app.get('/validate-quote/:code', (req, res) => {
  const { code } = req.params
  const stmt = db.prepare('SELECT * FROM quotes WHERE code = ?')
  console.log(code)
  const quote = stmt.get(code)
  console.log(quote)
  if (quote) {
      res.writeHead(200).end()
      console.log("validate success")
  } else {
    res.writeHead(404).end()
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
