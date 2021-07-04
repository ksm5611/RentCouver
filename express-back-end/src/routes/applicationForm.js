import { Router } from "express";
const router = Router();

router.get("/applications/:tenantId", (req, res) => {
  res.send("hello");
});

export default router;
