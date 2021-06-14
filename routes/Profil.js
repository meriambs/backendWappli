var express = require('express');
var router = express.Router();
const { sayProfil ,upDatedProfil ,getAllProfil,getProfId,profilExperience,deleteprofil} = require('../Controllers/profil');
const auth = require ('../middleware/auth');
const { body, validationResult } = require('express-validator');
const  Profile = require('../Models/Profile');
const User = require ('../Models/User');
/* GET home page. */
router.get('/me',auth,sayProfil);


// @route    Post  api/profile/
// @desc     Create/Update user's Profile
// @access   Private
router.post(
  "/",
  [
    auth,
   [ body("name", "name is required").not().isEmpty(),
    body("email", "email is required").not().isEmpty()],
  ],upDatedProfil);

 // @route    Get  api/profile/
// @desc     Get all profiles
// @access   Public

router.get("/", getAllProfil);
//get by id :


router.get('/user/:user_id',getProfId);


// @route    Get  api/profile/user/:user_id
// @desc     Get all profile by user ID
// @access   Public

router.put('/experience', [
    auth,
   [ body("title", "title is required").not().isEmpty(),
  body("company", "company is required").not().isEmpty()],
  ],profilExperience)

  //remove user and profil 
router.delete('/',auth,deleteprofil);




module.exports = router;