import { Router } from "express";
const router = Router();
import { User, Property, Photo } from "../db/models";

router.get("/properties/:id", async (req, res) => {
  const propertyDetails = await Property.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: User,
        attributes: {
          exclude: ["password", "annual_income", "other_household_occupants"],
        },
      },
      {
        model: Photo,
      },
    ],
  });
  res.send(propertyDetails);
});

export default router;
