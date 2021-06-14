const path = require('path');
const fs = require('fs');
const VideoModel = require('../Models/Video');
const ApplicationModel = require('../Models/Application');
const Profile = require('../Models/Profile');
const mv = require('mv')

module.exports.streamVideo = function(req, res) {
    
    const filePath = path.resolve(__dirname,`../uploads/${req.params.id}.webm`);
    const stat = fs.statSync(filePath)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1] 
        ? parseInt(parts[1], 10)
        : fileSize-1
        const chunksize = (end-start)+1
        const file = fs.createReadStream(filePath, {start, end})
        const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/webm',
        }
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/webm',
        }
        res.writeHead(200, head)
        fs.createReadStream(filePath).pipe(res)
    }
  }
module.exports.getAll = async (req, res) => {
    const videoList = await VideoModel.find({offer: req.params.jobOffer}).populate(['candidate']);
    res.json(videoList);
}
