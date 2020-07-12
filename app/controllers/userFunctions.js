// const level = require('../models/roles');
// const User = require('../models/users');
// const Client = require('../models/clients');
// const jwt = require('jsonwebtoken');
// const Config = require('../../config').get(process.env.NODE_ENV);
// const qs = require("querystring");
// const http = require("http");
// const moment = require('moment')


const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const morningModel = mongoose.model("mDiary");
const nightModel = mongoose.model("nDiary");



router.get("/", (req, res)=>{
    
    ///Setting
    // var nEntry = new nightModel();
    // nEntry.title = "Great DAy";
    // nEntry.diaryID = "10";
    // nEntry.info = "Today was a great day. How are oyou";
    // nEntry.save();

    //Getting
    nightModel.find((err, docs)=>{
        if(!err)
        {
            console.log(docs);
            res.render("index", { data : docs});
        }
        else
        {
            res.send("Error in code");
        }
    })
});

router.get("/night", (req, res)=>{
    
    ///Setting
    // var nEntry = new nightModel();
    // nEntry.title = "Great DAy";
    // nEntry.diaryID = "10";
    // nEntry.info = "Today was a great day. How are oyou";
    // nEntry.save();

    //Getting
    nightModel.find((err, docs)=>{
        if(!err)
        {
            console.log(docs);
            res.render("night", { data : docs});
        }
        else
        {
            res.send("Error in code");
        }
    })
});

router.get("/morning", (req, res)=>{
    
    ///Setting
    // var nEntry = new nightModel();
    // nEntry.title = "Great DAy";
    // nEntry.diaryID = "10";
    // nEntry.info = "Today was a great day. How are oyou";
    // nEntry.save();

    //Getting
    nightModel.find((err, docs)=>{
        if(!err)
        {
            console.log(docs);
            res.render("morning", { data : docs});
        }
        else
        {
            res.send("Error in code");
        }
    })
});

module.exports = router;





// module.exports.list = (req, res, next) => {

//     console.log("-----------------------", req.body)
//     var key
//     if (req.body.key) {
//         key = req.body.key.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
//     } else {
//         key = ''
//     }
//     Client.find({
//         $or: [{
//                 lName: new RegExp('^' + key, 'i'),
//             },
//             {
//                 fName: new RegExp('^' + key, 'i'),
//             }
//         ],
//     }).lean().exec((err, clients) => {
//         if (err) {
//             return next(err)
//         } else if (clients) {
//             return res.json({
//                 s: true,
//                 m: "Clients",
//                 d: clients
//             })
//         } else {
//             return res.json({
//                 s: false,
//                 m: "No client found with provided information",
//                 d: null
//             })
//         }
//     })

// }