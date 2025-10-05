import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { commentRoutes } from './api/comment.routes.js'
import { sendEmail } from './services/nodeMailer.service.js'
import job from './cron.js'
import pingRoute from './api/ping.route.js'
const app = express()

dotenv.config()

job.start()

const corsOptions = {
  origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static('public'))
app.use('/api/comments', commentRoutes)
app.use('/api/ping', pingRoute)

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
  console.log('Up and running on ' + `http://localhost:${PORT}`)
})
