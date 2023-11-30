const express = require("express");
const router = express.Router();

const ScreeningController = require("../controllers/ScreeningController");

router.get("/api/screenings", ScreeningController.getScreenings);
router.get("/api/screenings/:name/:screening", ScreeningController.getLast_Screenings_ByName_With_Screening);
router.post("/api/screenings", ScreeningController.createScreening);
router.delete("/api/screenings/:id", ScreeningController.deleteScreeningById);

module.exports = router;