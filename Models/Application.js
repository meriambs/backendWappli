const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
  createdAt: {
    type: String
  },
  profile:{
    type: Schema.Types.ObjectId, ref: 'profile'
  },
  user:{
    type: Schema.Types.ObjectId, ref: 'user'
  },
  photo:{
    type: Schema.Types.ObjectId, ref: 'photo'
  },
  offer:{
    type: Schema.Types.ObjectId, ref: 'jobOffer'
  },
  attachments: [{ type: Schema.Types.ObjectId, ref: 'media' }],
  video:{
    type: Schema.Types.ObjectId, ref: 'video'
  },
});


const ApplicationModel = mongoose.model('application',ApplicationSchema);

module.exports = ApplicationModel;
