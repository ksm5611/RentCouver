import "core-js/stable";
import "regenerator-runtime/runtime";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import Express from "express";
import BodyParser from "body-parser";
import {
  User,
  Property,
  Photo,
  RentHistory,
  Ref,
  Application,
  Ref_request,
} from "./db/models";
import applicationForm from "./routes/applicationForm";
import userInfo from "./routes/userInfo";
const App = Express();
App.use(cors());
const PORT = process.env.PORT;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
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

App.use("/api", userInfo);

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

App.get("/refs", async (req, res) => {
  const refs = await Ref.findAll();
  res.json(refs);
});

App.get("/applications", async (req, res) => {
  const applications = await Application.findAll();
  res.json(applications);
});

App.use("/api", applicationForm);

App.get("/ref_requests", async (req, res) => {
  const ref_requests = await Ref_request.findAll();
  res.json(ref_requests);
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
