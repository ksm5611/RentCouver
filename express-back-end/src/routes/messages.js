import { Router } from "express";
const router = Router();
import { Message_master, Message_details } from "../db/models";

router.get("/messages/:message_masterId/:userId", async (req, res) => {
  const message = await Message_details.findAll({});

  res.send(message);
});

// // sending message
// router.post("/messages", async (req, res) => {
//   const sendingMessage = await Message_master.create(
//     {
//       is_declined: true,
//     },
//     {
//       where: { id: req.params.applicationId },
//     }
//   );
//   res.json(sendingMessage);
// });

export default router;
