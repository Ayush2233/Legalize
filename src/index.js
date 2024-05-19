const express = require('express')
var cors = require('cors')
const path = require('path');
const { default: db, default: documents } = require('./database/database')
const bodyParser = require('body-parser');

const routes = require('../src/utility/routes');

const app = express()
const port = 3000


app.use(bodyParser.json());

app.use(cors());
app.use(express.static(path.join(__dirname, 'doc-gen-app/browser')));

app.use('/api', routes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,"doc-gen-app/browser/index.html"));
  });





app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

