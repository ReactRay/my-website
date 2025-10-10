import { dbService } from '../services/db.service.js'

export const visitorsService = {
  registerVisit,
  getCount,
  getAllVisits,
}

async function registerVisit(visitorId, website) {
  try {
    const collection = await dbService.getCollection('visitors')
    const existing = await collection.findOne({ visitorId, website })
    if (!existing) {
      await collection.insertOne({
        visitorId,
        website,
        createdAt: new Date(),
      })
    }
  } catch (err) {
    console.error('Error in registerVisit:', err)
    throw err
  }
}

async function getCount(website) {
  try {
    const collection = await dbService.getCollection('visitors')
    const count = await collection.countDocuments(website ? { website } : {})
    return count
  } catch (err) {
    throw err
  }
}

async function getAllVisits() {
  try {
    const collection = await dbService.getCollection('visitors')
    const visits = await collection.find().sort({ createdAt: -1 }).toArray()
    return visits
  } catch (err) {
    throw err
  }
}
