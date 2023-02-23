const express = require("express");
const config = require("../config");
const Data = require("../views/type/Data");
const data = require("../data.js")
const router = express.Router();
router.get("/", async (request, response) => {
   // var data1 = new Data();
   
   /* --- Data for Meta */

   var logoText = config.get("logo-text");
   data.set("title", `${logoText} | Trang Chủ`);

   /* --- Render the Page */

   response.render("index", {
      layout: "home",
      action: null,
      data : data
   });
}); // router

module.exports = router;