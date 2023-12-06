const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/AdminController");

router.post("/api/admin/login", AdminController.login);

router.get("/api/admin", AdminController.getAdmin);
router.get("/api/admin/:id", AdminController.getAdminById);
router.post("/api/admin", AdminController.createAdmin);
router.patch("/api/admin/:id", AdminController.updateAdminById);
router.delete("/api/admin/:id", AdminController.deleteAdminById);


module.exports = router;