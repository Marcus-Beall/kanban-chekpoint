let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'List'


let schema = new Schema({
  title: { type: String, required: true },
  boardId: { type: ObjectId, ref: 'Board', required: true },
  authorId: { type: ObjectId, ref: 'User', required: true }
})


module.exports = mongoose.model(schemaName, schema)