const mongoose = require("mongoose");
const nightModel = mongoose.model("nDiary");

module.exports = function(router){

    router.get("/night", (req, res)=>{

        //Getting
        nightModel.find((err, docs)=>{
            if(!err)
            {
                res.render("night", { data : docs});
            }
            else
            {
                res.send("Error in code of nightD");
            }
        })
    });
    
    router.post("/night", (req, res)=>{
        console.log(req.body);
        ///Setting
        var nEntry = new nightModel();
        nEntry.title = req.body.title;
        nEntry.diaryID = Math.ceil(Math.random()*10000000) + "";
        nEntry.info = req.body.info;
        nEntry.save((err, doc)=>{
            if(!err)
            {
                res.redirect("/night");
            }
            else
            {
                 res.send("Error occured saving data to database");
            }
        });
    });
}