const config = require('../config')
const express = require('express')
const simpleOauth2 = require('simple-oauth2')
const requestPromise = require('request-promise')

const oauth2 = simpleOauth2.create({
  client: {
    id: config.CLIENT_ID,
    secret: config.CLIENT_SECRET
  },
  auth: {
    tokenHost: config.TOKEN_HOST,
    tokenPath: config.TOKEN_PATH,
    authorizePath: config.AUTHORIZE_PATH
  }
})

const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: config.REDIRECT_URI,
  // This should be a dynamic generated value which can be verified when returned by oauth provider
  state: 'a833a8575db390bf1fd089befdd54b6e5562f1c60af8c0a6'
})

module.exports = function (app) {
  var route = express.Router()

  app.use('/', route)

  route.get('/', function (req, res) {
    return res.render('index', { title: 'Login' })
  })

  route.get('/login', function (req, res) {
    console.log(authorizationUri)
    return res.redirect(authorizationUri)
  })

  route.get('/auth/:provider/callback', (req, res) => {
    const code = req.query.code
    const options = {
      'code': code,
      'redirect_uri': config.REDIRECT_URI
    }

    // Get access_token from OAuth server using code
    oauth2.authorizationCode.getToken(options, (error, result) => {
      if (error) {
        console.error('Access Token Error', error.message)
        return res.render('index', { title: 'Login', message: 'Authentication failed' })
      }

      const token = oauth2.accessToken.create(result)
      console.dir(token)

      // Call API to get details on user
      var options = {
        uri: config.TOKEN_HOST + config.USER_DETAILS_PATH,
        qs: { access_token: result.access_token },
        json: true
      }

      requestPromise(options)
        .then(function (userDetails) {
          return res.render('index', { title: 'Login', message: JSON.stringify(userDetails, null, 2) })
        })
        .catch(function (error) {
          // API call to get user details failed...
          throw error
        })
    })
  })
}
