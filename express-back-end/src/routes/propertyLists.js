import { Router } from "express";
const router = Router();
import { Property, Photo } from "../db/models";

router.get("/propertyLists", async (req, res) => {
  const propertyList = await Property.findAll({
    attributes: {
      exclude: [
        "landlord_id",
        "square_feet",
        "description",
      ],
    },
    include: [
      {
        model: Photo,
        attributes: {
          exclude: ["property_id"],
        },
      },
    ],
    limit: 15,
  });
  res.send(propertyList);
});

export default router;
