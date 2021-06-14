const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  name : {
    type : String,
  },
  candidate:{
    type: Schema.Types.ObjectId, ref: 'user'
  },
  offer:{
    type: Schema.Types.ObjectId, ref: 'jobOffer'
  },
  type : {
    type : String,
  },
});

const VideoModel = mongoose.model('video',VideoSchema);

module.exports = VideoModel;
