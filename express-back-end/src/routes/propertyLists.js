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
        "property_type",
        "number_of_bathrooms",
        "number_of_bedrooms",
        "pets_allowed",
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
    limit: 3,
  });
  res.send(propertyList);
});

export default router;
