let mongoose = require("mongoose");

//Create a person having this prototype:
let ShareSchema = new mongoose.Schema({
    Title: {
        type:String,
        required:true
    },
    intro:{
         type:String,

    },
    recrutercandidate:{
     type:String
    },
    date:{
      type:String,
        required: true,
  },
  content:{
      type:String,
      required:true
  }
});

module.exports = Share = mongoose.model("share", ShareSchema);