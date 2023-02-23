// import data
const Data = require("../views/type/Data");
// menu
const Category = require("../views/type/Category");
// bai viet
const Entry = require("../views/type/Entry");

var category1 = new Category()
   .set("name", "Html")
   .set("url" , "/category/view/01");

var category2 = new Category()
   .set("name", "Css")
   .set("url" , "/category/view/02");

var category3 = new Category()
   .set("name", "Bootstrap")
   .set("url" , "/category/view/03");

var category4 = new Category()
   .set("name", "JavaScript")
   .set("url" , "/category/view/04");

var category5 = new Category()
   .set("name", "jQuery")
   .set("url" , "/category/view/05");

var category6 = new Category()
   .set("name", "NodeJS")
   .set("url" , "/category/view/06");

var category7 = new Category()
   .set("name", "ExpressJS")
   .set("url" , "/category/view/07");

var data = new Data()
   .set("category-list", [
      category1,
      category2,
      category3,
      category4,
      category5,
      category6,
      category7
   ]);


var entry1 = new Entry()
   .set("title", "Bài Viết Thứ 1001")
   .set("excerpt", "Nội dung trích đoạn mở đầu bài viết thứ 1001 ...")
   .set("url", "/article/view/1000");

var entry2 = new Entry()
   .set("title", "Bài Viết Thứ 1000")
   .set("excerpt", "Nội dung trích đoạn mở đầu bài viết thứ 1001 ...")
   .set("url", "/article/view/999");

data.set("entry-list", [
   entry1,
   entry2
]);

module.exports = data;