const crypto = require('crypto')
const time = new Date()
console.log(+time)
const secret = (+time).toString()
const hash = crypto.createHmac('sha1', secret)
  .update('snzfnm')
  .digest('hex')
console.log(hash)