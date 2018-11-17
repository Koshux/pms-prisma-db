const jwt = require('jsonwebtoken')
const APP_SECRET = 'GraphQL-is-aw3some'

function getUserId (context) {
  const authorization = context.request.get('Authorization')

  if (authorization == null) {
    throw new Error('Not authenticated')
  }
  console.log('authorization:', authorization)
  const token = authorization.replace('Bearer ', '')
  const { userId } = jwt.verify(token, APP_SECRET)
  console.log('User id:', userId, jwt.verify(token, APP_SECRET))
  return userId
}

module.exports = { APP_SECRET, getUserId }
