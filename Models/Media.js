const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MediaSchema = new Schema({
    extension: {
      type : String,
      },
    name : {
      type : String,
      },
    type : {
      type : String,
    },
    user: {
      type: Schema.Types.ObjectId, ref: 'user'
    },    
});

const MediaModel = mongoose.model('media',MediaSchema);

module.exports = MediaModel;