const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`mongodb connected ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline)
    process.exit(1)
  }
}

module.exports = connectDB