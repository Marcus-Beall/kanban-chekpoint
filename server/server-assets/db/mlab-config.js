var mongoose = require('mongoose')
var connectionString = 'mongodb://student:student1@ds016298.mlab.com:16298/kanbanboard'
var connection = mongoose.connection

//mlab login
//username Alan Butcher
//password student1

mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})