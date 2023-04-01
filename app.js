import express from 'express'
import dotenv from 'dotenv'

import userRouter from './routes/user.js'

dotenv.config()

export const app = express()

app.use(express.json())

app.use('/users', userRouter)