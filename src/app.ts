import * as express from 'express'
import * as routes from './routes'

const app = express()

app.use('/', routes)

export default app
