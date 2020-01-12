import express, {Router} from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import {connectDB} from './database'
import postRoutes from './Post/Post.routes'

const log = morgan('dev')

const app = express()
const bodyParserJSON = bodyParser.json()
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

const router = Router()

connectDB()

app.use(log)
app.use(bodyParserJSON)
app.use(bodyParserURLEncoded)

app.use('/api',router);
postRoutes(router)

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on ${process.env.PORT} port.`);
})
