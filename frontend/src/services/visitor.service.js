import { httpService } from './http.service'

export const visitorService = {
  trackVisit,
  getAllVisits,
}

async function trackVisit(website) {
  try {
    const res = await httpService.get(`visitors?website=${website}`)
    console.log('Visitor tracked:', res)
    return res
  } catch (err) {
    console.error('Failed to track visitor', err)
  }
}

async function getAllVisits() {
  try {
    return await httpService.get('visitors/all')
  } catch (err) {
    console.error('Failed to fetch visitors', err)
  }
}
