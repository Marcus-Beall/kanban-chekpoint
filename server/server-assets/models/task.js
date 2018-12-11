let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Task'

let commentSchema = new Schema({
  title: { type: String, required: true },
})

let schema = new Schema({
  title: { type: String, required: true },
  listId: { type: ObjectId, ref: 'List', required: true },
  boardId: { type: ObjectId, ref: 'Board', required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  comments: [commentSchema]
}, {
    usePushEach: true
  })


module.exports = mongoose.model(schemaName, schema)