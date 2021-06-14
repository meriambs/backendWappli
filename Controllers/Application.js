const mv = require('mv');
const ApplicationModel = require('../Models/Application');
const Joob = require('../Models/joboff');
const VideoModel = require('../Models/Video');
const Profile = require('../Models/Profile');
const Media = require('../Models/Media');
 
module.exports.readAll = async (req, res) => {
    const { owner } = req.params;
    const jobOffers = await Joob.find({owner});
    const applicationList = await ApplicationModel
        .find({ offer: {$in: jobOffers.map(e => e._id)} })
        .populate(['video', 'user', 'photo', 'profile', 'attachments']);
    res.json(applicationList);
}
 
module.exports.readJobOfferApplications = async (req, res) => {
    const { JoobId } = req.params;
    const applicationList = await ApplicationModel
        .find({ offer: JoobId})
        .populate(['video','attachments', 'user', 'photo', 'profile']);
    res.json(applicationList);
}


module.exports.apply = async function(req, res) {
    const { candidate, offer, attachements} = req.body;
    const { user } = req.params;
     const { name, type } = req.files.data;
    const SavedMedia = await Media
    .create({
        name,
        extension: type,
        type: 'profile',
        user,
    });
    const SavedVideo = await VideoModel
    .create({
        name: 'application',
        candidate,
        offer
    });
    mv(req.files.data.path, `uploads/${name}`, {mkdirp: true},async function(r) {
        const savedApplication = await ApplicationModel
        .create({
            video: SavedVideo._id,
            user,
            offer,
            attachments: [SavedMedia._id],
            createdAt: new Date()
        });
        mv(req.files.video.path, `uploads/${SavedVideo._id}.webm`, {mkdirp: true},function(r) {
            res.send(savedApplication)
        })
    })
  }
 