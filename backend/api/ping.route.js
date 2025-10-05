import express from 'express'
const router = express.Router()

// GET /api/ping
router.get('/', (req, res) => {
  res.send('pong')
})

export default router
