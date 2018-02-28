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

## [OAuth](https://oauth.net/) (fb, twitter, google)
