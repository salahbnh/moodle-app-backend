import Registration from "../models/registration.js";
import Webinar from "../models/webinar.js";

export const checkRegistration = async (req, res) => {
  const { userId } = req.query; // userId is passed as a query parameter
  const { webinarId } = req.params; // webinarId is passed as a route parameter

  try {
    const registration = await Registration.findOne({ userId, webinarId });
    res.json({ isRegistered: !!registration }); // Returns true if registered, otherwise false
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const registerForWebinar = async (req, res) => {
  const { userId } = req.body; // userId is passed in the body
  const { webinarId } = req.params; // webinarId is passed as a route parameter

  try {
    const webinar = await Webinar.findById(webinarId);
    if (!webinar) {
      return res.status(404).json({ error: "Webinar not found" });
    }

    // Check if the user is already registered
    const existingRegistration = await Registration.findOne({
      userId,
      webinarId,
    });
    if (existingRegistration) {
      return res.status(400).json({ error: "User is already registered" });
    }

    const registration = new Registration({ userId, webinarId });
    await registration.save();

    res.status(201).json({ message: "Registration successful", registration });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
