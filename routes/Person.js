var express = require('express');
var router = express.Router();
const { findUsers, createUser,findandUpdate,deleteUser} = require('../Controllers/users');

/* GET users listing. */
router.post('/', createUser);

/* GET users listing. */
 router.get('/', findUsers);
// router.get('/:id', findUsers);

// // update 

router.put('/:id',findandUpdate);

// //delete

 router.delete('/:id',deleteUser);

module.exports = router;
