import { Router } from "express";
const router = Router();
import { Property, Application, User } from "../db/models";

//req.param will find
router.get("/appList/:landlordId", async (req, res) => {
  const appList = await Application.findAll({
    where: { id: req.params.landlordId },
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
        include: [
          {
            model: User,
            attributes: {
              exclude: [
                "email",
                "password",
                "current_address",
                "property_type",
                "job_title",
                "annual_income",
                "is_landlord",
                "other_household_occupants",
              ],
            },
          },
        ],
      },
    ],
  });
  res.send(appList);
});

export default router;
