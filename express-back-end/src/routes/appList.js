import { Router } from "express";
const router = Router();
import { User, Application } from "../db/models";

//req.param will find
router.get("/appList/:landlordId", async (req, res) => {
  const appList = await Application.findOne({
    where: { id: req.params.landlordId },
  });
  res.send(appList);
});

export default router;
