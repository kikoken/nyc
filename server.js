'use strict'
const express = require('express')
const simulation = require('./test')

const app = express()

app.get('/', (req, res) => {
  simulation('mensaje').then(res => console.log(res))
  res.send('hello world')
})

app.listen(8080, () => {
  console.log('server up')
})
