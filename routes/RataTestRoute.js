const express = require("express");
const router = express.Router();

const RataTestController = require("../controllers/RataTestController");

router.get("/api/rata/depresi", RataTestController.getRataTestDepresi);
router.get("/api/rata/stress", RataTestController.getRataTestStress);
router.get("/api/rata/cemas", RataTestController.getRataTestCemas);
router.get("/api/rata/burnout", RataTestController.getRataTestBurnout);
router.get("/api/rata/bunuhdiri", RataTestController.getRataTestBunuhDiri);
router.get("/api/rata/kepribadian", RataTestController.getRataTestKepribadian);

module.exports = router;