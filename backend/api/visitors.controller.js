import { visitorsService } from './visitors.service.js'
import { randomUUID } from 'crypto'

export async function trackVisitor(req, res) {
  try {
    let visitorId = req.cookies.visitorId
    const website = req.query.website || req.body.website || 'personal'

    if (!visitorId) {
      visitorId = randomUUID()
      res.cookie('visitorId', visitorId, {
        maxAge: 365 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'Lax',
      })
    }

    await visitorsService.registerVisit(visitorId, website)
    const count = await visitorsService.getCount(website)

    res.send({ website, uniqueVisitors: count })
  } catch (err) {
    console.error(err)
    res.status(500).send('Failed to track visitor')
  }
}

export async function getAllVisits(req, res) {
  try {
    const visits = await visitorsService.getAllVisits()
    res.send(visits)
  } catch (err) {
    console.error(err)
    res.status(500).send('Failed to fetch visits')
  }
}
