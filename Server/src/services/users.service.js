const knex = require("./knexConfig");
const bcrypt = require("bcryptjs");
// check_login
async function checkLogin(username, clientPassword) {
  try {
    const user = await knex("users")
      .select("*")
      .where("username", username)
      .first();

    if (user) {
      // Lấy salt từ cơ sở dữ liệu
      const salt = user.salt;
      console.log(salt);
      // Hash mật khẩu gửi từ client sử dụng salt từ cơ sở dữ liệu
      const hashedPassword = await bcrypt.hash(clientPassword, salt);
      console.log(hashedPassword);
      // So sánh mật khẩu đã băm từ client với mật khẩu băm trong cơ sở dữ liệu
      if (hashedPassword === user.Password) {
        console.log(`Login success with username: ${username}`);
        return user;
      } else {
        console.log(`Incorrect password for username: ${username}`);
      }
    } else {
      console.log(`User with username ${username} not found`);
    }
  } catch (error) {
    throw error;
  }
}

// create user with JSON
async function createUser(userData, userDetailsData) {
  let transaction;

  try {
    transaction = await knex.transaction();
    userData.StatusID = "1";

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    userData.password = hashedPassword;
    userData.salt = salt;
    const [userId] = await transaction("users").insert(userData);
    userDetailsData.UserID = userId;

    await transaction("userdetails").insert(userDetailsData);

    await transaction.commit();
    console.log("create user success with data:", [
      [userData, userDetailsData],
    ]);
    return {
      userData,
      userDetailsData,
    };
  } catch (error) {
    if (transaction) {
      await transaction.rollback();
    }
    throw error;
  }
}

// get user by username
async function getUserByUsername(username) {
  try {
    const user = await knex("users").where("username", username).first();
    if (user) {
      console.log(`Information with username: ${username} are`, [user]);
      return user;
    } else {
      console.log(`${username} does not exist`);
    }
  } catch (error) {
    throw error;
  }
}

// get all list user
async function getusers(page) {
  try {
    const itemsPerPage = 5;
    const offset = (page - 1) * itemsPerPage;
    const users = await knex("users")
      // join feild StatusName by StatusID
      .select("users.*", "status.StatusName as StatusName")
      .join("status", "users.StatusID", "status.StatusID")
      .limit(itemsPerPage)
      .offset(offset); // data skip
    console.log("Get list user success:");
    console.log([users]);
    return users;
  } catch (error) {
    console.log("Get list user fail", error);
    throw error;
  }
}

// update user
async function updateUser(userData, userDetailsData, userRolesData) {}

// delete with username
async function deleteUser(username) {
  let transaction;
  try {
    transaction = await knex.transaction();

    const user = await transaction("users").where("Username", username).first();
    if (!user) {
      console.log("Username does not exist");
      await transaction.rollback();
      return null;
    }

    const userId = user.UserID;

    await transaction("userroles").where("UserID", userId).del();
    await transaction("userdetails").where("UserID", userId).del();
    await transaction("users").where("UserID", userId).del();

    await transaction.commit();
    console.log(`Delete user with ${username} success`);
    return username;
  } catch (error) {
    if (transaction) {
      await transaction.rollback();
      console.log("An error while deleting user", error);
    }
    throw error;
  }
}

module.exports = {
  checkLogin,
  createUser,
  getUserByUsername,
  getusers,
  updateUser,
  deleteUser,
};
