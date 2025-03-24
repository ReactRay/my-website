import { dbService } from '../services/db.service.js'
import { ObjectId } from 'mongodb'

export const commentService = {
  query,
  post,
}

async function query() {
  try {
    const collection = await dbService.getCollection('comments')
    const comments = await collection.find().sort({ createdAt: -1 }).toArray()
    return comments
  } catch (err) {
    throw err
  }
}

async function post(comment) {
  try {
    comment.createdAt = Date.now()
    const collection = await dbService.getCollection('comments')
    await collection.insertOne(comment)
    return comment
  } catch (err) {
    throw err
  }
}
