# Node Auth Intro

- Login
- Logout
- Session

## JSON Web Tokens ([jwt](https://jwt.io/))

- #### sign
``` js
const jwt = require('jsonwebtoken')
...

jwt.sign(<objeto a guardar en el payload>, 'llave-secretísima', <opciones>, <funcion-callback> (err, token) {

})
```

## Password Hashing (bcrypt)

## [Passport.js](http://www.passportjs.org/docs/)

- Install

`$ npm i -s passport`
`$ npm i -s passport-local`
`$ npm i -s express-session`

- Objective: authenticate requests
- Work as a middleware

### Strageties

- Distinct authentication mechanisms
- In case of success authentication request will be decorated with `req.user`

- #### LocalStrategy

Recives two params `username` y `password`, y la función done()
- done (err) para manejar un error de servidor
- done (null, false, {message: 'asdasd'}) error de authentication
- done (null, credentials) para lo que queramos guardar (expose o decorate) req.user




## [OAuth](https://oauth.net/) (fb, twitter, google)
