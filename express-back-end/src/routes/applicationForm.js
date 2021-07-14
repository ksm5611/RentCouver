import { Router } from "express";
const router = Router();
import { User, RentHistory, Property, Application } from "../db/models";


router.get("/applications/:tenantId", async (req, res) => {
  const applicationForm = await User.findOne({
    where: { id: req.params.tenantId },
    attributes: { exclude: ["password"] },
    include: [
      {
        model: RentHistory,
        where: { tenant_id: req.params.tenantId },
        require: false,
        attributes: {
          exclude: ["is_requested", "is_decline"],
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
            include: [
              {
                model: User,
              },
            ],
          },
        ],
      },
    ],
  });
  res.send(applicationForm);
});

//submit application form call
router.post("/applications", async (req, res) => {
  if (req.body.renthistories_id) {
    try {
      const rentHistory = await RentHistory.findOne({
        where: { id: req.body.renthistories_id },
      });
      rentHistory.is_requested = true;
      await rentHistory.save();

      res.send(rentHistory);
    } catch (error) {
      res.send(error);
    }
  }
  const applicationForm = await Application.create(req.body);

  res.send(applicationForm);
});

export default router;
