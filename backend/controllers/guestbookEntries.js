const guestbookRouter = require('express').Router()
const GuestbookEntry = require('../models/guestbookEntry')

guestbookRouter.get('/', async (request, response) => {
  const entries = await GuestbookEntry
    .find({})
  response.json(entries)
})

guestbookRouter.post('/', async (request, response) => {
  const entry = new GuestbookEntry(request.body)

  if (entry.text === undefined || entry.signature == undefined) {
    return response.status(400).json({error: 'missing signature or text'})
  }

  entry.date = new Date()

  const savedEntry = await entry.save()

  response.status(201).json(savedEntry)
})

module.exports = guestbookRouter