const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('please include all field')
  }
  console.log(req.body)
  //  find if user already exist
  const userExist = await User.findOne({ email })
  if (userExist) {
    res.send(407)
    throw new Error('user already exist')
  }
  // hashpassword
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('invalid user data')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  // check user and password match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('INvalid credentail')
  }
})

const getMe = asyncHandler(async (req, res, next) => {
  res.send('me')
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JSON_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = { registerUser, loginUser, getMe }
