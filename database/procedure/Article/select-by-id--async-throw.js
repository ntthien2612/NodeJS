const Article = require("../../type/Article");

module.exports = async (
   in_recordId = "Infinity",
   out_selected = new Article()
) => {
   console.log("select-article-by-id");
   console.log(`in_recordId: ${in_recordId}`);
   console.log(`out_selected: ${out_selected}`);
};