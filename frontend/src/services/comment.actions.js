import { httpService } from './http.service.js'

export async function query() {
  try {
    const comments = await httpService.get('comments')
    return comments
  } catch (error) {
    throw error
  }
}

export async function post(body) {
  try {
    const comment = await httpService.post('comments', body)
    return comment
  } catch (error) {
    throw error
  }
}

export async function emailMe(body) {
  try {
    const response = await httpService.post('comments/contact', body)

    return response
  } catch (error) {
    throw error
  }
}
