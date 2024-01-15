const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// get user Ticket,api/tickets,private routes

const getTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' })
})

// create newTicket private, post:/api/tickets

const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createTicket' })
})

module.exports = { getTicket, createTicket }
