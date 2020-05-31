let http = require('http')
const Logger = require('./utils/logger')
const logger = new Logger()


let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello Hero!')
})

let port = 8000
server.listen(port)

console.log('Hey mate, I am your server running at http://localhost:%d', port)
logger.info('Hello I am info logs, how are you?')
logger.error('Hello I am error logs, how are you?')
