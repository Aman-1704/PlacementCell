const express = require('express')
const router = express.Router();

console.log('Router files is running.........');

const UserControllers = require('../controllers/UserController');

router.get('/', UserControllers.home);
router.use('/users', require("./user"));

module.exports = router;