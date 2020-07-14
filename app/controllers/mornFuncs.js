const mongoose = require("mongoose");
const morningModel = mongoose.model("mDiary");
const todosModel = mongoose.model("todos");

module.exports = function(router){

    router.get("/morning", (req, res)=>{
        var todoData;
        todosModel.find((err, docs)=>{
            if(!err)
            {
                todoData = docs;
            }
            else
            {
                res.send("Error in code of todos model");
            }
        })
        //Getting
        morningModel.find((err, docs)=>{
            if(!err)
            {   
                res.render("morning", { data : docs, todos : todoData});
            }
            else
            {
                res.send("Error in code of morningD");
            }
        })
    });
    
    router.post("/morning", (req, res)=>{
        
        ///Setting
        var mEntry = new morningModel();
        mEntry.title = req.body.title;
        mEntry.diaryID = Math.ceil(Math.random()*10000000) + "";
        mEntry.customTodo = req.body.customTodo;
        mEntry.todoList = req.body.todoList;
        mEntry.todos = req.body.todos;
        mEntry.save((err, doc)=>{
            if(!err)
            {
                res.redirect("/morning");
            }
            else
            {
                 res.send("Error occured saving data to database");
            }
        });
    });
    
}