import { Router } from "express";
const router = Router();
import { Application, RentHistory, Property, User } from "../db/models";

//req.param will find
router.get("/refRequest/:renthistoryId", async (req, res) => {
  const refRequest = await Application.findAll({
    include: [
      {
        model: RentHistory,
        include: [
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
            include: [{ model: User }],
          },
        ],
      },
    ],
  });

  res.send(refRequest);
});

export default router;
