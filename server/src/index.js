const {server} = require('./app')

const cors = require('cors')

require('dotenv').config()

const {PORT} = process.env

server.use(cors())

server.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT: ${PORT}`)
})