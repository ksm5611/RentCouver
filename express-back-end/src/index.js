import "core-js/stable";
import "regenerator-runtime/runtime";
import dotenv from "dotenv";
dotenv.config();
import Express from "express";
import { User, Property, Photo, RentHistory } from "./db/models";
const App = Express();
const PORT = process.env.PORT;

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

App.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

App.get("/properties", async (req, res) => {
  const properties = await Property.findAll();
  res.json(properties);
});

App.get("/photos", async (req, res) => {
  const photos = await Photo.findAll();
  res.json(photos);
});

App.get("/rentHistories", async (req, res) => {
  const rentHistories = await RentHistory.findAll();
  res.json(rentHistories);
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
