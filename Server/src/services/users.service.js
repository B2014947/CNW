const knex = require("./knexConfig");

// check_login
async function checkLogin(username, passwd) {
  try {
    const user = await knex("users")
      .select("*")
      .where("username", username)
      .andWhere("password", passwd)
      .first();
    if (user) {
      console.log(`Đăng nhập thành công người dùng với username: ${username}`);
      return user || null;
    } else {
      console.log(`Sai thông tin đăng nhập: ${username} hoặc ${passwd}`);
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

    // Tạo người dùng và lấy ID
    const [userId] = await transaction("users").insert(userData);
    userDetailsData.UserID = userId;

    await transaction("userdetails").insert(userDetailsData);

    await transaction.commit();
    console.log("Đã tạo thành công người dùng gồm thông tin như sau:", [
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
      console.log(`Thông tin người dùng có username: ${username}`, [user]);
      return user;
    } else {
      console.log(`Người dùng có username: ${username} không tồn tại`);
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
    console.log("Lấy danh sách người dùng thành công:");
    console.log([users]);
    return users;
  } catch (error) {
    console.log("Lỗi trong quá trình lấy danh sách người dùng:", error);
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
      console.log("Người dùng không tồn tại");
      await transaction.rollback();
      return null;
    }

    const userId = user.UserID;

    await transaction("userroles").where("UserID", userId).del();
    await transaction("userdetails").where("UserID", userId).del();
    await transaction("users").where("UserID", userId).del();

    await transaction.commit();
    console.log("Xóa người dùng thành công");
    return username;
  } catch (error) {
    if (transaction) {
      await transaction.rollback();
      console.log("Lỗi trong quá trình xóa người dùng:", error);
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
