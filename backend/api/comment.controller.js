import { sendEmail } from '../services/nodeMailer.service.js'
import { commentService } from './comment.service.js'

export async function getComments(req, res) {
  try {
    const comments = await commentService.query()
    res.send(comments)
  } catch (err) {
    res.status(400).send(`Couldn't get comments`)
  }
}

export async function addComment(req, res) {
  try {
    const comment = req.body

    const savedComment = await commentService.post(comment)

    res.send(`added the comment ${comment.text} by ${comment.user}`)
  } catch (error) {
    res.status(400).send('could add comment')
  }
}

export async function sendEmailToMe(req, res) {
  try {
    const { emailFrom, message, name } = req.body

    if (!emailFrom || !message) {
      return res.status(400).send('Email and message are required')
    }

    sendEmail(emailFrom, message, name)

    res.send(`${emailFrom} - ${message}, this message was sent successfully`)
  } catch (error) {
    console.log(error)
    res.status(500).send('Could not send email')
  }
}
