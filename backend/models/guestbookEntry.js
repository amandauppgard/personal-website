const mongoose = require('mongoose')

const guestbookEntrySchema = new mongoose.Schema({
  signature: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 30
  },
  text: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 500
  },

  date: Date
})

guestbookEntrySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('GuestbookEntry', guestbookEntrySchema)