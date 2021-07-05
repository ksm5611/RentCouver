import { Router } from "express";
const router = Router();
import { User } from "../db/models";

router.get("/users/:id", async (req, res) => {
  const userInfo = await User.findOne({
    where: { id: req.params.id },
    attributes: {
      exclude: ["password", "annual_income", "other_household_occupants"],
    },
  });
  res.send(userInfo);
});

export default router;
