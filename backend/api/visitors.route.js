import express from 'express'
import cookieParser from 'cookie-parser'
import { trackVisitor, getAllVisits } from './visitors.controller.js'

export const router = express.Router()
router.use(cookieParser())

router.get('/', trackVisitor)
router.get('/all', getAllVisits)
