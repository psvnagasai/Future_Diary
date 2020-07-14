const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const userSchema = new Schema({
  Username: {
    type: String,
    unique: true,
    uppercase: true
  },
 
  ObjectId: {
    type: Schema.Types.ObjectId,
  },
  password: {
    type: String,
  }
}, { timestamps : true });

module.exports = mongoose.model('User', userSchema, 'users');