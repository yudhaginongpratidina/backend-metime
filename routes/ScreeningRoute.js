const express = require("express");
const router = express.Router();

const ScreeningController = require("../controllers/ScreeningController");

router.get("/api/screenings", ScreeningController.getScreenings);
router.get("/api/screenings/:name", ScreeningController.getScreeningByName);

router.post("/api/screenings", ScreeningController.createScreening);
router.patch("/api/screenings/:id", ScreeningController.updateScreeningById);

router.delete("/api/screenings/:id", ScreeningController.deleteScreeningById);

module.exports = router;