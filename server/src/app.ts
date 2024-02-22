
import express from 'express';
import path from 'path';
const app = express();

app.use(express.static(path.join(__dirname, '/../../client/dist/')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../client/dist/', 'index.html'));
});

app.listen(3000, () => {
  console.log("Server is running on 3000")
});
