const express = require("express");
const config = require("../config");
const Data = require("../views/type/Data");
// const data = require("../data.js")


const databaseManager = require("../database/manager");

// import data
// const Data = require("./views/type/Data");
// menu
const Category = require("../views/type/Category");
// bai viet
const Entry = require("../views/type/Entry");

const Article = require("../views/type/Article");


const router = express.Router();
router.get("/", async (request, response) => {
   var data = new Data();
   
   /* --- Data for Meta */

   var logoText = config.get("logo-text");
   data.set("title", `${logoText} | Trang Chủ`);

   /* --- Render the Page */
   var articleList = [];
   await databaseManager.execute(
      Article.name, "select",
      articleList, 10, "reversed", ["@id", "title", "content"]
   );
   
   var enryList = [];
   for (var article of articleList.slice(1)) {
      var contentMarkdown = article.get("content");
      var excerptMarkdown = contentMarkdown.slice(0, 300);

      var entry = new Entry();
      entry.set("title", article.get("title"))
           .set("excerpt", `${excerptMarkdown}...`)
           .set("url", `/article/view/${article.get("@id")}`);
           
      enryList.push(entry);
   }

   data.set("entry-list", enryList);


   // 
   response.render("index", {
      layout: "home",
      action: null,
      data : data
   });
}); // router

module.exports = router;

