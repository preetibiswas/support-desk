const express = require('express')
const router = express.Router()

const { protect } = require('../middleware/authMiddleware')

const { getTicket, createTicket } = require('../controller/ticketController')

router.route('/').get(protect, getTicket).post(protect, createTicket)

module.exports = router
