const express = require("express");
const router = express.Router();

router.use("/view", require("./action/view.js"));
router.use("/add", require("./action/add.js"));
router.use("/edit", require("./action/edit.js"));
router.use("/delete", require("./action/delete.js"));

module.exports = router;