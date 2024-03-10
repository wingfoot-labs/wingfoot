import express from 'express';
import https from 'https';
import * as path from 'path';
import fs from 'fs';
const app = express();

const options = {
  key: fs.readFileSync(path.resolve(__dirname, '../ssl/server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, '../ssl/server.crt')),
};

app.use(express.static(path.join(__dirname, '/../../client/dist/')));

app.get('/', (req: any, res: any) => {
  res.send('test');
});

app.get('/test', (req: any, res: any) => {
  res.send('test');
});
const server = https.createServer(options, app);

server.listen(5000, () => {
  console.log('Server is running on 5000');
});
