const express = require('express');
const router = express.Router();
const mediaController = require('../Controllers/Media');
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()


router.post('/:user', multipartMiddleware, mediaController.saveMedia);


router.get('/:user', mediaController.readAll);


router.delete('/:mediaId', mediaController.deleteOne);

module.exports = router;
