const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// get user Ticket,api/tickets,private routes

const getTicket = asyncHandler(async (req, res) => {
  // get user useing the id in the jwt
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('user not Found')
  }
  const tickets = await Ticket.find({ user: req.user.id })

  res.status(200).json(tickets)
})

// create newTicket private, post:/api/tickets

const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body

  if (!product || !description) {
    res.status(400)
    throw new Error('Please add a Product and description')
  }
  // get user using id in the jwt
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('User not Found')
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: 'new',
  })

  res.status(200).json(ticket)
})

module.exports = { getTicket, createTicket }
