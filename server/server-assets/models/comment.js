let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Comment'


let schema = new Schema({
  title: { type: String, required: true },
  taskId: { type: ObjectId, ref: 'Task', required: true }
})


module.exports = mongoose.model(schemaName, schema)