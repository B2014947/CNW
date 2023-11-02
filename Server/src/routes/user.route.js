// url
const express = require("express");
const userController = require("../controller/users.controller");
const router = express.Router();

router.post("/login", userController.checkuserlogin);

router.post("/create", userController.createUser);

router.get("/getusers", userController.getUsers);

router.get("/getuserbyusername/:username", userController.getUserByUsername);
router.get("/getuserbyusername/", userController.getUserByUsername);

// router.put("/update/:user_id", userController.updatedUser);
// router.put("/update", userController.updatedUser);

router.delete("/delete_user/:username", userController.deleteUser);
router.delete("/delete_user/", userController.deleteUser);

module.exports = router;
