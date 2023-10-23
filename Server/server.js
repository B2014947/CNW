require("dotenv").config();
const app = require("./src/app");
const { knex, checkconnection } = require("./src/database/db.config");

// Start server
const PORT = process.env.PORT;

checkconnection().then((connected) => {
  if (connected) {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } else {
    console.error("Connection to database failed");
  }
});
