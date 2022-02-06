const express = require("express");
const router = express.Router();
const { isAuth } = require("../middlewares/isAuth");
const { courseValidation } = require("../validation/courseValidate");
const {
  getHome,
  getCreate,
  postCreate,
  getDetails,
  getEdit,
  postEdit,
  postDelete,
  postEnroll,
} = require("../controllers/courseCtrl");

router.get("/", getHome);
router.get("/course/create", getCreate);
router.post("/course/create", courseValidation(), postCreate);
router.get("/details/:courseId", getDetails);
router.get("/edit/:courseId", getEdit);
router.post("/edit/:courseId", courseValidation(), postEdit);
router.post("/delete/:courseId", postDelete);
router.post("/enroll/:courseId", postEnroll);

module.exports = router;
