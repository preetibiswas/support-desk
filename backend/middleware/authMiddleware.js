const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // get token from header
      token = req.headers.authorization.split(' ')[1]
      // verify the token
      const decoded = jwt.verify(token, process.env.JSON_SECRET)
      // GET USER FROM TOKEN
      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      console.log(error)
      res.status(402)
      throw new Error('not authorised')
    }
  }
  if (!token) {
    res.status(403)
    throw new Error('Not Authorised')
  }
})

module.exports = { protect }
