const userService = require("../services/users.service");
const ApiError = require("../api-error");

//check info login
async function checkuserlogin(req, res, next) {
  const username = req.body.username;
  const passwd = req.body.password;

  if (!username) {
    return next(new ApiError(400, "Username can not be empty!"));
  } else if (!passwd) {
    return next(new ApiError(400, "Password can not be empty!"));
  }
  try {
    console.log("Received data from client:", req.body);

    const checklogin = await userService.checkLogin(username, passwd);
    if (!checklogin) {
      return next(new ApiError(404, "Username or password does not exist!"));
      // The email address or mobile number you entered isn't connected to an account.
    }
    return res.json({
      message: `Login success`,
    });
  } catch (error) {
    console.log(error);
    return next(new ApiError(500, "An error occurred while login"));
  }
}

async function createUser(req, res, next) {
  if (
    !req.body?.username ||
    !req.body?.password ||
    !req.body?.firstName ||
    !req.body?.lastName ||
    !req.body?.email
  ) {
    return next(new ApiError(400, "All required fields must be provided."));
  }
  try {
    const userData = {
      username: req.body.username,
      password: req.body.password,
    };

    const userDetailsData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    };

    const user = await userService.createUser(userData, userDetailsData);
    return res.send(user);
  } catch (error) {
    console.log(error);
    return next(new ApiError(500, "An error occurred while creating the user"));
  }
}

async function getUserByUsername(req, res, next) {
  const username = req.params.username;

  try {
    const user = await userService.getUserByUsername(username);

    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return next(new ApiError(500, "An error occurred while fetching user"));
  }
}

//
async function getUsers(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const users = await userService.getusers(page);
    return res.json(users);
  } catch (error) {
    console.log(error);
    return next(new ApiError(500, "An error occurred while fetching users"));
  }
}

async function updatedUser(req, res, next) {
  const user_id = req.params.user_id || req.body.user_id;

  if (!user_id) {
    return next(new ApiError(400, "ID user can not be empty!"));
  }

  try {
    const updatedUser = await userService.updateUser(user_id, req.body);
    if (!updatedUser) {
      return next(new ApiError(404, `ID user ${user_id} dose not exist!`));
    }
    return res.send(updatedUser);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(
        500,
        `An error occurred while updating user with ID user is ${user_id}`
      )
    );
  }
}

async function deleteUser(req, res, next) {
  const username = req.body.username || req.params.username;
  try {
    const delete_user = await userService.deleteUser(username);
    if (delete_user) {
      return res.json({
        message: `Delete success user with username: ${username}`,
      });
    } else {
      return next(new ApiError(404, `username: ${username} does not exist`));
    }
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(
        500,
        `An error occurred while deleting user with username: ${username}`
      )
    );
  }
}

module.exports = {
  checkuserlogin,
  createUser,
  getUsers,
  getUserByUsername,
  updatedUser,
  deleteUser,
};
