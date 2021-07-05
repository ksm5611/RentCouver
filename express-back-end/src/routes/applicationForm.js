import { Router } from "express";
const router = Router();
import { User, RentHistory, Property, Application } from "../db/models";

//req.param
router.get("/applications/:tenantId", async (req, res) => {
  const applicationForm = await User.findOne({
    where: { id: req.params.tenantId },
    attributes: { exclude: ["is_landlord", "password"] },
    include: [
      {
        model: RentHistory,
        where: { tenant_id: req.params.tenantId },
        require: false,
        attributes: {
          exclude: ["is_requested", "is_decline", "review_content"],
        },
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
        ],
      },
    ],
  });
  res.send(applicationForm);
});

//submit application form call
router.post("/applications", async (req, res) => {
  console.log(req.body);

  const applicationForm = await Application.create(req.body);

  res.json(applicationForm);
});

export default router;
