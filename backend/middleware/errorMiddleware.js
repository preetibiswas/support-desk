// const errorhandler = (err, req, res, next) => {
//   const statusCode = res.statusCode ? res.statusCode : 500
//   res.send(statusCode)
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//   })
// }
// module.exports = { errorhandler }

const errorhandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500 // Corrected variable name and added semicolon
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Corrected 'nul' to 'null'
  })
}

module.exports = { errorhandler }
