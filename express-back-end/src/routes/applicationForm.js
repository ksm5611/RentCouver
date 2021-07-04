import { Router } from "express";
const router = Router();
import { User, RentHistory, Application } from "../db/models";

//req.param
router.get("/applications/:tenantId", async (req, res) => {
  const applicationForm = await User.findOne({
    where: { id: req.params.tenantId },
    include: [
      {
        model: Application,
        where: { tenant_id: req.params.tenantId },
        require: false,
        attributes: { exclude: ["is_landlord", "password"] },
      },
      {
        model: RentHistory,
        where: { tenant_id: req.params.tenantId },
        require: false,
      },
    ],
  });
  res.send(applicationForm);
});

export default router;
