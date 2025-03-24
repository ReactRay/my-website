import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('hello my friends')
})

export const commentRoutes = router
