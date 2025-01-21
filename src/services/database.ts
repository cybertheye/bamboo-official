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



export default db
