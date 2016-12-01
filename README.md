# MoJ SSO demo Node

[![Build Status](https://travis-ci.org/ministryofjustice/moj-sso-demo-node.svg?branch=master)](https://travis-ci.org/ministryofjustice/moj-sso-demo-node?branch=master) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A demonstration integration with [Ministry of Justice Sign On](https://github.com/ministryofjustice/moj-sso) using `Node.js`. See that repository for integration instructions.

This demo

* uses the `simple-oauth2` module to handle the OAuth flows
* stores the user's id and info in the session
* implements the optional logout redirection back to this app

## Usage instructions

This repo is already configured for usage with <https://www.signon.dsd.io/>. To run the demo against this OAuth provider:

* Get a login on <https://www.signon.dsd.io/> and add yourself to the Demo team within the `digital.moj` organisation. This grants your user access to the 'Demo' app.
* Go to https://moj-sso-demo-node.herokuapp.com to see the running application

If you'd rather run Sign On locally:

* Create an app via the Sign On super admin interface
* Configure this app within `app/config.js`
* Run the application

```
npm install
npm start
```

## Notes

This implementation is deliberately simple to show the full OAuth flow, for a full implementation you should consider using a module like [passport](https://www.npmjs.com/package/passport) with [passport-oauth2](https://www.npmjs.com/package/passport-oauth2) which will handle retrieving the access token automatically for you.