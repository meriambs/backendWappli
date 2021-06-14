const mongoose = require('mongoose');

profileSchema = new mongoose.Schema({
  user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user'
  },
  githubusername:{
      type:String
  },
  education:[{
      school:{
          type:String,
          required:true 
      },
      degree:{
          type:String,
          required:true 
      },
      fieldofstudy:{
          type:String,
          required: true 
      }
  }],
      PhoneNumber:{
        type:Number,
         
      },
      location:{
          type:'String'
      }
});

module.exports = Profile = mongoose.model('profile',profileSchema);