const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Note = require('../models/noteModel')
const Ticket = require('../models/ticketModel')

// get notes for a ticket
// GET api/tickets/:ticketId/notes

const getNotes = asyncHandler(async (req, res) => {
  // get user useing the id in the jwt
  const user = await User.findById(req.user.id)
  console.log('user', user)
  if (!user) {
    res.status(401)
    throw new Error('user not Found')
  }
  const ticket = await Ticket.findById(req.params.tickerId)
  console.log('ticket', req.params)

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not  Authorized')
  }
  const notes = await Note.find({ ticket: req.params.ticketId })

  res.status(200).json(notes)
})

module.exports = { getNotes }
