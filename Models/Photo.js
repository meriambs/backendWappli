const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    extension: {
      type : String,
      },
    name : {
      type : String,
      },
    type : {
      type : String,
    },    
});

const PhotoModel = mongoose.model('photo',PhotoSchema);

module.exports = PhotoModel;