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
App.use(cors());
const PORT = process.env.PORT;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

App.use("/api", userInfo);

App.use("/api", propertyDetails);
App.use("/api", propertyList);

App.use("/api", applicationForm);

App.use("/api", rentHistories);

App.use("/api", appList);
App.use("/api", refRequest);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
