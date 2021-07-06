import { Router } from "express";
const router = Router();
import { Property } from "../db/models";

router.get("/propertyLists", async (req, res) => {
  const propertyList = await Property.findAll();
  res.send(propertyList);
});

export default router;
