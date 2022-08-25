
const { join } = require('path')
const router = require('express').Router()

router.use('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'))
})
module.exports= router;