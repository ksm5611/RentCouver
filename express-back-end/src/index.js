import "core-js/stable";
import "regenerator-runtime/runtime";
import dotenv from "dotenv";
dotenv.config();
import Express from "express";
const App = Express();
const PORT = process.env.PORT;
const User = require("./sequelize/users");

// Express Configuration
// App.use(BodyParser.urlencoded({ extended: false }));
// App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
App.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

App.get("/user", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
