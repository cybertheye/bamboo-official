import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

// Create database directory if it doesn't exist
const dbDir = path.join(__dirname, '../../data')
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir)
}

const db = new Database(path.join(dbDir, 'quotes.db'))

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS quotes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT UNIQUE NOT NULL,
    file_path TEXT NOT NULL
  );
`)

// Insert sample data if table is empty
const count = db.prepare('SELECT COUNT(*) as count FROM quotes').get().count
if (count === 0) {
  const insert = db.prepare('INSERT OR IGNORE INTO quotes (code, file_path) VALUES (?, ?)')
  insert.run('12345', 'src/assets/quotes/12345.md')
}

export default db
