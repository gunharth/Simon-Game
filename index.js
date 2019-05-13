const express = require('express')
const https = require('https')
const path = require('path')
const PORT = process.env.PORT || 3000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.render('docs/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
