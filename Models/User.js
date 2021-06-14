let mongoose = require("mongoose");

//Create a person having this prototype:
let UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName:{
    type:String,
    required:true,
  },
 email: {
    type: String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
    isRecruiter: {
     type: Boolean,
     required: true
   },
   photo:{
    type: String,
   },
   adress:{
     type:String,
     
   },
   githubLink:{
     type:String
   },
   linkedin:{
     type:String
   },
   phoneNumber:{
     type:String
   }
});

module.exports = User = mongoose.model("user", UserSchema);