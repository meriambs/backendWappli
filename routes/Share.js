var express = require('express');
var router = express.Router();
const {  findArticle,createArticle,findandUpdateArticle,deleteArticle,findSpecifiArticle } = require('../Controllers/Share');
const { body, validationResult } = require('express-validator');

//ici on a les post que le recruteur peut ecrire donc un get , un post edit ainsi qu'un delete,
/* GET users listing. */

router.get('/',findArticle);
// router.get('/:id', findUsers);
router.get('/:id',findSpecifiArticle);
/* POST users listing. */

router.post(
  '/',
   body('title', "you have to put a Title").not().isEmpty(),
  // username must be an email
  body('content',"Your article content is empty  , please write something").not().isEmpty(),
  // password must be at least 5 chars long
  body('recruter_candidate',"your recruter_candidate is empty , please put yout title ! ").not().isEmpty(),createArticle
);

// // update 

router.put('/:id',findandUpdateArticle);

// //delete

 router.delete('/:id',deleteArticle);
module.exports = router;