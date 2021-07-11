import { Router } from "express";
import { Op } from "sequelize";
const router = Router();
import { Property, Photo } from "../db/models";

router.get("/propertyLists", async (req, res) => {
  const where = {};
  if (req.query) {
    if (req.query.property_type) {
      where.property_type = req.query.property_type;
    }
    if (req.query.number_of_bathrooms) {
      where.number_of_bathrooms = req.query.number_of_bathrooms;
    }
    if (req.query.number_of_bedrooms) {
      where.number_of_bedrooms = req.query.number_of_bedrooms;
    }
    if (req.query.cost_of_month_gt) {
      where.cost_of_month = {
        [Op.gt]: req.query.cost_of_month,
      };
    }

    if (req.query.cost_of_month_lt) {
      where.cost_of_month = {
        [Op.lt]: req.query.cost_of_month,
      };
    }

    if (req.query.pets_allowed) {
      where.pets_allowed = req.query.pets_allowed;
    }
  }

  const propertyList = await Property.findAll({
    where: {
      ...where,
    },
    attributes: {
      exclude: ["landlord_id", "square_feet", "description"],
    },
    include: [
      {
        model: Photo,
        attributes: {
          exclude: ["property_id"],
        },
      },
    ],
    limit: req.query.limit,
  });
  res.send(propertyList);
});

export default router;
