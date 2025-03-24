import express from 'express'
import cors from 'cors'

const app = express()

const corsOptions = {
  origin: ['http://127.0.0.1:5174', 'http://localhost:5174'],
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static('public'))

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
  console.log('Up and running on ' + `http://localhost:${PORT}`)
})
