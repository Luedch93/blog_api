import express, {Router} from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'

import {connectDB} from './database'
import postRoutes from './Post/Post.routes'

const log = morgan('dev')

let whitelist = []

if (process.env.ENV === 'dev') {
  whitelist = process.env.WHITELIST_DEV.split(',')
} else {
  whitelist = process.env.WHITELIST.split(',')
}

const corsOptions = {
  origin: function (origin, callback) {
    console.log('origin', origin);
    console.log('whitelist', whitelist);
    
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express()
const bodyParserJSON = bodyParser.json()
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

const router = Router()

connectDB()

app.use(log)
app.use(bodyParserJSON)
app.use(bodyParserURLEncoded)

app.use('/api', cors(corsOptions), router);
postRoutes(router)

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on ${process.env.PORT} port.`);
})
