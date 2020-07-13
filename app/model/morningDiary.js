var mongoose = require("mongoose");

var morningSchema = new mongoose.Schema({
    title : {
        type : String,
        required : "Required"
    },

    diaryID : {
        type : String
    },
    
    customTodo : {
        type : String
    },

    todoList : {
        type : String
    },

    todos : {
        type : String
    }
}); 

mongoose.model("mDiary", morningSchema);