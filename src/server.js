const cors = require('cors')
const express = require('express')
const {routes} = require('./routes')

const app = express()
app.use(express.json())
app.use(cors())
routes(app)

const port = 3003

routes
app.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`)
})