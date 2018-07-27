const server = require('express')()

server.get('/api/getmsg', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end('sendMsg') 
})
server.listen(9000)
