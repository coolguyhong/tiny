import express from 'express'
import users from './../database/users'

const router = express.Router()
const userService = users()

router.post('/users', (req, res) => {
  let data = req.body
  userService.insert(data)
  res.status(200)
  res.send('succeed to register user')
})

export default router
