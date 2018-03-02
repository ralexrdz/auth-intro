const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

var session = require('express-session')
// Inicializa sesión de servidor para express
app.use(session({ secret: 'cats', cookie: {maxAge: 100000000} }))
var passport = require('passport')

// inicializas servicio de passport
app.use(passport.initialize())
// inicializas servicio de sesiones de passport
app.use(passport.session())


var LocalStrategy = require('passport-local').Strategy
// var FBStrategy = require('passport-facebook').Strategy
// var GoogleStrategy = require('passport-googel-auth').Strategy

// primer parametro es el nombre de la estrategia

passport.use(new LocalStrategy(
  // Por default la LocalStrategy recibe username y password
  // Opcional
  function (username, password, done) {
    console.log(username, password)
    // return done(null, false, {message:'Unable to login'})
    return done(null, {name: 'Ralex', id: '123'})
    // User.findOne({ username: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     // done null false for invalid credentials
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' });
    //   }
    //   // set user with proper credentials in cookie
    //   return done(null, user);
    // });
  }
))

passport.serializeUser(function (user, done) {
  done(null, user.id) // the user id that you have in the session
})

passport.deserializeUser(function (id, done) {
  done(null, id) // generally this is done against user database as validation
})

app.get('/', (req, res) => {
  res.send('HelloWorld')
})
app.get('/user', (req, res) => {
  res.send('Hello: ')
})
app.get('/human', (req, res) => {
  res.send('HelloHuman')
})
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
)

app.listen('3000', () => console.log('Running in 3000'))
