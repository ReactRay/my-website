import express from 'express'
import { getComments, addComment, sendEmailToMe } from './comment.controller.js'
const router = express.Router()

router.get('/', getComments)
router.post('/', addComment)
router.post('/contact', sendEmailToMe)

export const commentRoutes = router
