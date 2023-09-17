const express = require("express");
const passport = require("passport");
const router = express.Router();

const CompanyController = require('../controllers/CompanyController');

router.get("/", passport.checkAuthentication, CompanyController.companyhome);
router.get("/allocateinterview", passport.checkAuthentication, CompanyController.allocateInterview);
router.post("/scheduleInterview",passport.checkAuthentication,CompanyController.scheduleInterview);
router.post("/update/:id",passport.checkAuthentication,CompanyController.updateRecords);

module.exports = router;