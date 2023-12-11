const express = require("express");
const router = express.Router();


const TotalTestController = require("../controllers/TotalTestController");

router.get("/api/test/depresi", TotalTestController.getTestDepresi);
router.get("/api/test/stress", TotalTestController.getTestStress);
router.get("/api/test/cemas", TotalTestController.getTestCemas);
router.get("/api/test/burnout", TotalTestController.getTestBurnout);
router.get("/api/test/bunuhdiri", TotalTestController.getTestBunuhDiri);
router.get("/api/test/kepribadian", TotalTestController.getTestKepribadian);



module.exports = router;