const level = require('../models/roles');
const User = require('../models/users');
const Client = require('../models/clients');
const jwt = require('jsonwebtoken');
const Config = require('../../config').get(process.env.NODE_ENV);
const qs = require("querystring");
const http = require("http");
const moment = require('moment')



module.exports.list = (req, res, next) => {

    console.log("-----------------------", req.body)
    var key
    if (req.body.key) {
        key = req.body.key.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    } else {
        key = ''
    }
    Client.find({
        $or: [{
                lName: new RegExp('^' + key, 'i'),
            },
            {
                fName: new RegExp('^' + key, 'i'),
            }
        ],
    }).lean().exec((err, clients) => {
        if (err) {
            return next(err)
        } else if (clients) {
            return res.json({
                s: true,
                m: "Clients",
                d: clients
            })
        } else {
            return res.json({
                s: false,
                m: "No client found with provided information",
                d: null
            })
        }
    })

}