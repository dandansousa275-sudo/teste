import Database from "better-sqlite3"; import fs from "fs"; import path from "path";
const url=process.env.DATABASE_URL||"file:./data/app.db"; const file=url.replace(/^file:/,""); fs.mkdirSync(path.dirname(path.resolve(file)),{recursive:true});
export const db=new Database(path.resolve(file));
db.exec(`CREATE TABLE IF NOT EXISTS projects(id TEXT PRIMARY KEY,title TEXT,mode TEXT,script TEXT,status TEXT,progress REAL,duration REAL,settings TEXT,visual_bible TEXT,created_at TEXT,updated_at TEXT);
CREATE TABLE IF NOT EXISTS scenes(id INTEGER PRIMARY KEY AUTOINCREMENT,project_id TEXT,narration TEXT,visual_description TEXT,estimated_duration REAL,context TEXT,characters TEXT,environment TEXT,era TEXT,visual_style TEXT,image_prompt TEXT,animation_prompt TEXT,status TEXT,image_url TEXT,video_url TEXT,audio_url TEXT);
CREATE TABLE IF NOT EXISTS jobs(id TEXT PRIMARY KEY,type TEXT,project_id TEXT,scene_id INTEGER,status TEXT,attempts INTEGER,error TEXT,created_at TEXT,completed_at TEXT);`);
