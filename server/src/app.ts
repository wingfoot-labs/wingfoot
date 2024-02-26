const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const app = express();

const options = {
  key: fs.readFileSync(path.resolve(__dirname, '../sec/server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, '../sec/server.crt')),
};

app.use(express.static(path.join(__dirname, '/../../client/dist/')));

app.get('/test', (req: any, res: any) => {
  res.send('test');
});
const server = https.createServer(options, app);

server.listen(5000, () => {
  console.log('Server is running on 5000');
});
