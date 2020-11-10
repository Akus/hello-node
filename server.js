const express = require('express')
const config = require('config')
const app = express()
const port =  config.get('server.port') || 8080

console.log('app data is ' + config.app["my-data"])
console.log('Environment is ' + config.get('env'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port} !`))
