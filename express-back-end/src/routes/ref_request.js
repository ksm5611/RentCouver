import { Router } from "express";
const router = Router();
import { Ref_request, RentHistory, Property, User } from "../db/models";

//req.param will find
router.get("/refRequest/:landlordId", async (req, res) => {
  const refRequest = await Ref_request.findAll({
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

router.post("/reqReference", async (req, res) => {
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
  const receviedRequest = await Ref_request.create(req.body);

  res.send(receviedRequest);
});

//creating ref request(message submit)
router.post("/refRequest/:historyId", async (req, res) => {
  const refRequest = await RentHistory.update({
    review_content: req.body,
    where: { id: req.params.historyId },
  });

  res.json(refRequest);
});

//decline request form call
router.post("/declineRefReq/:renthistoriesId", async (req, res) => {
  const declineRefReq = await Ref_request.update(
    {
      is_decline: true,
    },
    {
      where: { renthistories_id: req.params.renthistoriesId },
    }
  );
  res.json(declineRefReq);
});

export default router;
