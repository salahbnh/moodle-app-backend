import express from "express";
import {
  checkRegistration,
  registerForWebinar,
} from "../controllers/registrationController.js";

const router = express.Router();

router.get("/:webinarId/:userId", checkRegistration);
router.post("/register/:webinarId/:userId", registerForWebinar);

export default router;
