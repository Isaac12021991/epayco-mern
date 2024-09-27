import app from './app.js';
import { connectDB } from './db.js';
import { config } from 'dotenv';
config();

connectDB();

console.log('Server running at port: ', process.env.PORT);
app.listen(process.env.PORT);