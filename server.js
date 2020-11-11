const express = require('express')
const config = require('config')
const app = express()
const port =  config.get('server.port') || 8080

console.log('app data is ' + config.app["my-data"])

app.get('/', (req, res) => res.send('Hello World from AKS!'))

app.listen(port, () => console.log(`Example app listening on port ${port} !`))
