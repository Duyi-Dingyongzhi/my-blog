const server = require('express')()
const express = require('express')

server.use("/static/css", express.static('./dist/static/css'))
server.use("/static/js", express.static('./dist/static/js'))
server.get('/api/getmsg', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end('sendMsg') 
})

server.get('/', (req, res) => {
    var file=require('fs').readFileSync('./dist/index.html', 'utf-8')
    res.end(file)
})
server.listen(9000, () => {
    console.log('server is running at 9000')
})
