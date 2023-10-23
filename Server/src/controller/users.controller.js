const userService = require("../services/users.service");
const ApiError = require("../api-error");

async function createUser(req, res, next) {
  if (!req.body?.username) {
    return next(new ApiError(400, "Username can not be empty!"));
  }
  try {
    const user = await userService.createUser(req.body);
    return res.send(user);
  } catch (error) {
    console.log(error);
    return next(new ApiError(500, "An error occurred while creating the user"));
  }
}

async function getUserById(req, res, next) {
  const user_id = req.params.user_id || req.body.user_id;

  if (!user_id) {
    return next(new ApiError(400, "ID user can not be empty!"));
  }
  try {
    const found_user = await userService.getUserById(user_id);
    if (!found_user) {
      return next(new ApiError(404, `ID user: ${user_id} does not exist!`));
    }
    return res.send(found_user);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while fetching user by ID")
    );
  }
}

async function getUsers(req, res, next) {
  try {
    const user = await userService.getusers(req.query);
    return res.send(user);
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
  const user_id = req.params.user_id || req.body.user_id;
  if (!user_id) {
    return next(new ApiError(400, "ID user can not be empty!"));
  }
  try {
    const checkID_user = await userService.getUserById(user_id);
    if (checkID_user) {
      await userService.deleteUser(user_id);
      return res.json({
        message: `Deleted user whose ID is: ${user_id} success`,
      });
    }
    return next(new ApiError(404, `ID user: ${user_id} does not exist!`));
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(
        500,
        `An error occurred while delete user with ID user is ${user_id}`
      )
    );
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updatedUser,
  deleteUser,
};
