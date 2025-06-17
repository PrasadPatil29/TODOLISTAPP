const mongoose = require("mongoose");
const { Schema } = mongoose;

const todo = new Schema({
    title : String,
    description:String
})

const Todo = mongoose.model('Todo',todo);
module.exports=Todo;