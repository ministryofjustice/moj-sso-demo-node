module.exports = {
  CLIENT_ID: process.env.CLIENT_ID || '9b24ca66e474ffa261873280181761ba66f0ed1ae54f298f1e778074166e8def',
  CLIENT_SECRET: process.env.CLIENT_SECRET || 'c3edd0b229f5b6bb50cdd711dd3f6e0accb621a60cedf6cb3904ffd768623dcd',
  TOKEN_HOST: process.env.TOKEN_HOST || 'https://www.signon.dsd.io',
  TOKEN_PATH: process.env.TOKEN_PATH || '/oauth/token',
  AUTHORIZE_PATH: process.env.AUTHORIZE_PATH || '/oauth/authorize',
  REDIRECT_URI: process.env.REDIRECT_URI || 'https://moj-sso-demo-node.herokuapp.com/auth/mojsso/callback',
  USER_DETAILS_PATH: process.env.USER_DETAILS_PATH || '/api/user_details',
  LOGOUT_PATH: process.env.LOGOUT_PATH || '/users/sign_out'
}
