const express = require("express");
const router = express.Router();

const TestimoniController = require("../controllers/TestimoniController");

router.get("/api/testimoni", TestimoniController.getTestimoni);
router.get("/api/testimoni/:id", TestimoniController.getTestimoniById);
router.post("/api/testimoni", TestimoniController.createTestimoni);
router.delete("/api/testimoni/:id", TestimoniController.deleteTestimoniById);

module.exports = router;