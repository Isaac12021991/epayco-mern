import app from './app.js';
import { config } from 'dotenv';
config();

console.log('Server running at port: ', process.env.PORT);
app.listen(process.env.PORT);