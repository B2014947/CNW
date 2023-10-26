// user.route.js
const express = require("express");
const userController = require("../controller/users.controller");
const router = express.Router();

router.get("/login", userController.checkuserlogin);

router.post("/create", userController.createUser);

router.get("/getusers", userController.getUsers);

router.get("/getuserbyid/:user_id", userController.getUserById);
router.get("/getuserbyid/", userController.getUserById);

router.put("/update/:user_id", userController.updatedUser);
router.put("/update", userController.updatedUser);

router.delete("/delete_user/:user_id", userController.deleteUser);
router.delete("/delete_user/", userController.deleteUser);

module.exports = router;
