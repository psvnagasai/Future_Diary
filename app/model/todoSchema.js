var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    todo : {
        type : String,
    }
}); 

mongoose.model("todos", todoSchema);