var mongoose = require("mongoose");

var morningSchema = new mongoose.Schema({
    title : {
        type : String,
        required : "Required"
    },

    diaryID : {
        type : String
    },
    
    info : {
        type : String
    }
}); 

mongoose.model("mDiary", morningSchema);