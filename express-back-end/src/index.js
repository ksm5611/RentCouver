import "core-js/stable";
import "regenerator-runtime/runtime";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import Express from "express";
import BodyParser from "body-parser";
import applicationForm from "./routes/applicationForm";
import userInfo from "./routes/userInfo";
import propertyDetails from "./routes/propertyDetails";
import propertyList from "./routes/propertyLists";
import rentHistories from "./routes/rentHistories";
import appList from "./routes/appList";
import refRequest from "./routes/ref_request";
const App = Express();
const PORT = process.env.PORT;

const corsOptions = {
  origin: "http://localhost:8081",
};
App.use(cors(corsOptions));

// Express Configuration
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// simple route
App.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

App.use("/api", userInfo);

App.use("/api", propertyDetails);
App.use("/api", propertyList);

App.use("/api", applicationForm);

App.use("/api", rentHistories);

App.use("/api", appList);
App.use("/api", refRequest);

// routes (login)
require("../src/db/loginRoutes/auth.routes")(App);
require("../src/db/loginRoutes/user.routes")(App);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
