import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()


app.use(cors(
    {
        origin: process.env.CORS_URL


    }
))

app.use(express.json({ limit: '10kb' }))

app.use(express.urlencoded({ limit: '10kb', extended: true }))

app.use(express.static('public'))

app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'

//routes

app.use('/api/v1/users', userRouter)

export default app
