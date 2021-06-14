const mv = require('mv')
const Media = require('../Models/Media');
const User = require('../Models/User');

module.exports.saveMedia = async function(req, res) {
    const { user} = req.params;
    const { name, type } = req.files.data;
    
    const SavedMedia = await Media
    .create({
        name,
        extension: type,
        type: 'profile',
        user,
    });
    mv(req.files.data.path, `uploads/${SavedMedia._id}${name}`, {mkdirp: true},function(r) {
        res.send(`upload successful ${name}`)
    })
  }

module.exports.readAll = async (req, res) => {
    const { user } = req.params;
    const media = await Media.find({ user });
    return res.json(media);
}

module.exports.deleteOne = async (req, res) => {
    const { mediaId } = req.params;
    const media = await Media.remove({ _id: mediaId });
    return res.json(media);
}