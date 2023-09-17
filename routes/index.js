const express = require('express')
const router = express.Router();

console.log('Router files is running.........');

const UserControllers = require('../controllers/UserController');

router.get('/', UserControllers.home);
router.use('/users', require("./user"));
router.use('/student',require('./student'));
router.use("/company", require("./company"));

module.exports = router;