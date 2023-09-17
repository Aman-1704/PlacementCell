// IMPORTING THE MODULES
const express = require('express')
const router = express.Router();

console.log('Router files is running.........');

const UserControllers = require('../controllers/UserController');

//routes for homepage
router.get('/', UserControllers.home);
// routes for /users/
router.use('/users', require("./user"));
// routes for /student/
router.use('/student',require('./student'));
// routes for /company/
router.use("/company", require("./company"));

module.exports = router;