

const request = require('request')

request('http://ipinfo.io', function(error, res, body) {
  console.log(JSON.parse(body))
})

module.exports = body

