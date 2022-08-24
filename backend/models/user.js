const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const Schema = mongoose.Schema;
// Define collection and schema
let User = new Schema({
   name: {
      type: String
   },
   username:{
      type:String
   },
   email: {
      type: String
   },
   password: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'User'
})

User.pre("save", function (next) {
   const user = this
 
   if (this.isModified("password") || this.isNew) {
     bcrypt.genSalt(saltRounds, function (saltError, salt) {
       if (saltError) {
         return next(saltError)
       } else {
         bcrypt.hash(user.password, salt, function(hashError, hash) {
           if (hashError) {
             return next(hashError)
           }
 
           user.password = hash
           next()
         })
       }
     })
   } else {
     return next()
   }
 })
module.exports = mongoose.model('User', User)