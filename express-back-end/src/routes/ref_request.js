import { Router } from "express";
const router = Router();
import { Application } from "../db/models";

//req.param will find
router.get("/appList/:landlordId", async (req, res) => {
  const appList = await Application.findAll({});

  res.send(appList);
});

export default router;
