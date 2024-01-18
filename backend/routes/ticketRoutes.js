const express = require('express')
const router = express.Router()
const noteRouter = require('./noteRoutes')

const { protect } = require('../middleware/authMiddleware')

const {
  getTickets,
  createTicket,
  getTicket,
  updateTicket,
  deleteTicket,
} = require('../controller/ticketController')

// re-route into note Router
router.use('/:tickerId/notes', noteRouter)

router.route('/').get(protect, getTickets).post(protect, createTicket)
router
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket)

module.exports = router
