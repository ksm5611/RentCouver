import { Router } from "express";
const router = Router();
import { Property, Application, User } from "../db/models";

router.get("/appList/:landlordId", async (req, res) => {
  const appList = await Application.findAll({
    where: { landlord_id: req.params.landlordId },
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
      },
      {
        model: User,
        as: "tenant",
        attributes: {
          exclude: [
            "email",
            "password",
            "current_address",
            "property_type",
            "job_title",
            "annual_income",
            "other_household_occupants",
          ],
        },
      },
    ],
  });

  res.send(appList);
});

//decline application form call
router.post("/appList/:applicationId", async (req, res) => {
  const appList = await Application.update(
    {
      is_declined: true,
    },
    {
      where: { id: req.params.applicationId },
    }
  );
  res.json(appList);
});

export default router;
