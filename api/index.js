import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import users from './routes/users'

// Create express instance
const app = express()

// Create body parser to use 'req.body'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// create session to use 'req.session'
app.use(session({
  secret: 'super-secret-key-Wow-This-Is-Important!',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// Import API Routes
app.use(users)

// Export the server middleware
export default {
  path: '/api/v1',
  handler: app
}

// router.post('/signin', (req, res) => {
//   if (req.body.id === 'admin' && req.body.pw === 'a00000') {
//     req.session.authUser = req.body.id
//     return res.json({ id: 'admin' })
//   }
//   return res.json({ id: '' })
// })
//
// router.post('/logout', (req, res) => {
//   delete req.session.authUser
//   res.json({ ok: true })
// })


