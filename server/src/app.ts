import express from 'express';
import https from 'https';
import * as path from 'path';
import fs from 'fs';
import { __dirname } from './utils/utils.js';
const app = express();

const options = {
  key: fs.readFileSync(path.resolve(__dirname, '../../ssl/server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, '../../ssl/server.crt')),
};

app.get('/', (req: any, res: any) => {
  res.send('this is a test 2');
});

app.get('/test', (req: any, res: any) => {
  res.send('this is a test 2');
});
const server = https.createServer(options, app);

server.listen(5000, () => {
  console.log('Server is running on 5000');
});
