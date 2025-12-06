const mongoose = require('mongoose')

const guestbookEntrySchema = new mongoose.Schema({
  signature: String,
  text: String
})

guestbookEntrySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('GuestbookEntry', guestbookEntrySchema)