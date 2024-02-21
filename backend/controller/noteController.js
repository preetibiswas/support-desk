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
  const notes = await Note.find({ ticket: req.params.tickerId })

  res.status(200).json(notes)
})

// createdNOtes
// Post api/tickets/:ticketId/notes
// private
const addNote = asyncHandler(async (req, res) => {
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
  const note = await Note.create({
    ticket: req.params.tickerId,
    text: req.body.text,
    isStaff: false,
    user: req.user.id,
  })

  res.status(200).json(note)
})

module.exports = { getNotes, addNote }
