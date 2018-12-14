let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'List'
let Tasks = require('./task')

let schema = new Schema({
  title: { type: String, required: true },
  boardId: { type: ObjectId, ref: 'Board', required: true },
  authorId: { type: ObjectId, ref: 'User', required: true }
})

schema.pre('remove', function (next) {
  let boardId = this.boardId
  // @ts-ignore
  Promise.all([
    Tasks.deleteMany({ boardId: boardId })
  ])
    .then(() => next())
    .catch(err => next(err))
})


module.exports = mongoose.model(schemaName, schema)