console.log('server is running')
const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const { errorhandler } = require('./middleware/errorMiddleware')

const PORT = process.env.PORT || 8000
connectDB()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/userRoutes'))

app.use('/api/tickets', require('./routes/ticketRoutes'))

app.get('/', (req, res) => {
  res.status(201).json({ message: 'welcom to the support app' })
})
app.use(errorhandler)

app.listen(PORT, () => console.log(`server started on Port ${PORT}`))
