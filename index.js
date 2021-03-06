const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const path = require('path')
var os = require("os");
var hostname = os.hostname();

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')))
app.use(express.static(__dirname + '/public'))
app.listen(port, () => console.log('app listening on port '+port+'! and address ' +hostname))