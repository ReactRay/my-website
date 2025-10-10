import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { commentRoutes } from './api/comment.routes.js'
import { router as visitorsRouter } from './api/visitors.route.js'
import pingRoute from './api/ping.route.js'
import job from './cron.js'

dotenv.config()

const app = express()

job.start()

// ✅ Allow both your personal site and Layale site
const corsOptions = {
  origin: [
    'http://127.0.0.1:5173',
    'http://localhost:5173',
    'https://www.radwan-mansur.com',
    'https://layale.vercel.app',
  ],
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static('public'))

// ✅ Routes
app.use('/api/comments', commentRoutes)
app.use('/api/ping', pingRoute)
app.use('/api/visitors', visitorsRouter) // 👈 add this line

// ✅ Start server
const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
})
