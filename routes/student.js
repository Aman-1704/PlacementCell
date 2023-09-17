const express = require("express");
const passport = require("passport");
const router = express.Router();

const StudentController = require('../controllers/StudentControllers');

router.get("/create", passport.checkAuthentication, StudentController.createreq);
router.post("/createstudent", passport.checkAuthentication, StudentController.createStudent);
router.get("/view/:id",passport.checkAuthentication, StudentController.viewdata);
router.get("/update/:id",passport.checkAuthentication, StudentController.updatereq);
router.post("/modifydone",passport.checkAuthentication, StudentController.updtedone);
router.get("/delete/:id",passport.checkAuthentication, StudentController.deletedata);


module.exports = router;