const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder
app.use('/scripts', express.static(path.join(__dirname + '/node_modules/')));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(path.join(__dirname + "/public/index.html")));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info('listening on %d', port);
});
