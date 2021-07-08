import { Router } from "express";
const router = Router();
import { Application, RentHistory, Property, User } from "../db/models";

//req.param will find
router.get("/refRequest/:landlordId", async (req, res) => {
  const refRequest = await Application.findAll({
    where: { landlord_id: req.params.landlordId },
    include: [
      {
        model: RentHistory,
        include: [
          {
            model: User,
          },
          {
            model: Property,
            attributes: {
              exclude: [
                "title",
                "square_feet",
                "description",
                "property_type",
                "number_of_bathrooms",
                "number_of_bedrooms",
                "listed_start_date",
                "cost_of_month",
                "pets_allowed",
              ],
            },
          },
        ],
      },
    ],
  });

  res.send(refRequest);
});

//creating ref request
router.post("/refRequest/:historyId", async (req, res) => {
  const refRequest = await RentHistory.update({
    review_content: req.body,
    wherer: { id: req.params.historyId },
  });

  res.json(refRequest);
});

export default router;
