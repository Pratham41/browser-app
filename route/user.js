const router = require('express').Router();
const {
  loginUser,
  deleteUser,
  checkAlreadyLogin,
  getUserData,
} = require('../controller/user');

router.route('/login').post(loginUser);
router.route('/delete').delete(deleteUser);
router.route('/check').post(checkAlreadyLogin);
router.route('/getuser').post(getUserData);

module.exports = router;
