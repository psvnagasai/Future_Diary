var mongoose = require("mongoose");

var nightSchema = new mongoose.Schema({
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

mongoose.model("nDiary", nightSchema);