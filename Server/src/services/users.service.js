const knex = require("./knexConfig");

// check_login
async function checkLogin(username, passwd) {
  try {
    const user = await knex("users")
      .select("*")
      .where("username", username)
      .andWhere("password", passwd)
      .first();
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    throw error;
  }
}

// create user with JSON
async function createUser(userData) {
  try {
    const [id] = await knex("users").insert(userData);
    return {
      id,
      ...userData,
    };
  } catch (error) {
    throw error;
  }
}

// get user by ID
async function getUserById(userId) {
  try {
    const user = await knex("users")
      .select("*")
      .where("user_id", userId)
      .first();
    return user;
  } catch (error) {
    throw error;
  }
}

// get all list user
async function getusers() {
  try {
    const users = await knex("users").select("*");
    return users;
  } catch (error) {
    throw error;
  }
}

// update user
async function updateUser(userId, updatedData) {
  try {
    await knex("users").where("user_id", userId).update(updatedData);
    const updatedUser = await knex("users")
      .select("*")
      .where("user_id", userId)
      .first();
    return updatedUser;
  } catch (error) {
    throw error;
  }
}

// delete with ID user
async function deleteUser(userId) {
  try {
    await knex("users").where("user_id", userId).del();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  checkLogin,
  createUser,
  getUserById,
  getusers,
  updateUser,
  deleteUser,
};
