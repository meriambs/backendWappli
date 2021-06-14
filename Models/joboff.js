let mongoose = require("mongoose");

//Create a person having this prototype:
let JobSchema = new mongoose.Schema({
    SocieteName: {
        type:String,
        required:true
    },
    adress:{
     type:String
    },
  JobDescription:{
      type:String,
        required: true,
  },
  JobRequirements:{
      type:String,
      required:true
  },
  HowToApply:{
      type:String,
      required:true
  },
  recruteurName:{
      type:String,
      required:true
  }
});

module.exports = Joob = mongoose.model("joob", JobSchema);