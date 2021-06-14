
const multipart = require('connect-multiparty')
const express = require('express');
const applicationControler = require('../Controllers/Application');
const router = express.Router();
const multipartMiddleware = multipart()

router.get('/all-candidates/:owner', applicationControler.readAll)
// router.get('/:jobOffer', applicationControler.readRecruiterJobOffers)
router.get('/offer/:JoobId', applicationControler.readJobOfferApplications)
router.post('/:user', multipartMiddleware, applicationControler.apply);

module.exports = router;