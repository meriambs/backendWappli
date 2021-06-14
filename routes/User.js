var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth')
const { findUsers,createUser,findandUpdate,deleteUser,uploadPhoto} = require('../Controllers/user');
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');
const multipart = require('connect-multiparty')
//ramasser les fichiers 
const multipartMiddleware = multipart()

/* GET users listing. */
 router.get('/', auth,findUsers);

router.post('/photo',auth,multipartMiddleware,uploadPhoto);
/* POST users listing. */

router.post(
  '/',
   body('name', "you have to put a name").not().isEmpty(),
   //lastname pârt :
   body('lastName', "you have to put a Last name").not().isEmpty(),
  // username must be an email
  body('email',"enter a valid mail please").isEmail(),
  // password must be at least 5 chars long
  body('password',"your password have to be min 5 caracters").isLength({ min: 5 }),createUser

  );

// // update 

router.put('/:id',findandUpdate);

// //delete

 router.delete('/:id',deleteUser);

module.exports = router;