const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Ticket',
    },
    text: {
      type: String,
      required: [true, 'Please add some Text'],
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    staffId: {
      type: String,
    },
  },
  {
    timeStamps: true,
  },
)

module.exports = mongoose.model('Note', noteSchema)
