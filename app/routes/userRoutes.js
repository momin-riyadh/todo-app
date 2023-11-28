const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware");
const {
    registerUser,
    loginUser,
    getLoggedInUser,
} = require("../controllers/userController");

router.get("/", function (req, res) {
    res.render("register");
});
router.get("/login", function (req, res) {
    res.render("login");
});
router.get("/me", function (req, res) {
    res.render("me");
});


router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getLoggedInUser);

module.exports = router;
