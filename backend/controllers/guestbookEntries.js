const guestbookRouter = require('express').Router()
const GuestbookEntry = require('../models/guestbookEntry')

guestbookRouter.get('/', async (request, response) => {
  const page = parseInt(request.query.page) || 1
  const limit = parseInt(request.query.limit) || 10

  const skip = (page - 1) * limit

  const [entries, total] = await Promise.all([
    GuestbookEntry.find({})
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit),
    GuestbookEntry.countDocuments()
  ])

  response.json({
    data: entries,
    total,
    page,
    totalPages: Math.ceil(total / limit)
  })
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