var express = require('express');
var router = express.Router();
const {  findPost,createPost,findandUpdatePost,deletePost,findSpecifiPost } = require('../Controllers/post');
const { body, validationResult } = require('express-validator');

//ici on a les post que le recruteur peut ecrire donc un get , un post edit ainsi qu'un delete,
/* GET users listing. */

router.get('/',findPost);
// router.get('/:id', findUsers);
router.get('/:id',findSpecifiPost);
/* POST users listing. */

router.post(
  '/',
   body('SocieteName', "you have to put a Societe Name").not().isEmpty(),
  // username must be an email
  body('JobDescription',"Your Job Description is empty , please write something").not().isEmpty(),
  // password must be at least 5 chars long
  body('JobRequirements',"your Job Requirements is empty , please write something ").not().isEmpty(),createPost
);

// // update 

router.put('/:id',findandUpdatePost);

// //delete

 router.delete('/:id',deletePost);
module.exports = router;