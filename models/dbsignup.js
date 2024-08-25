const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

const signupSchema = new mongoose.Schema({
   role: {
    type: String,
   },
   email: {
    type: String,
   },
   branch: {
    type: String,
   }
})
 signupSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
 })
 module.exports = mongoose.model("Signup", signupSchema);