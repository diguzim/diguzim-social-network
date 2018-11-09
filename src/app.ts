import * as express from 'express'
const routes = require('./routes')(express.Router())

const app = express()

app.use('/', routes)

export default app
