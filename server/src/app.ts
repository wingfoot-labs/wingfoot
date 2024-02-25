const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/../../client/dist/')));

app.listen(5000, () => {
  console.log('Server is running on 5000');
});
