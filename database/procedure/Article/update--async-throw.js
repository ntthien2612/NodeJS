const Article = require("../../type/Article");

module.exports = async (
   in_record = new Article(),
   out_updated = new Article()
) => {
   console.log("update-article");
   console.log(`in_record: ${in_record}`);
   console.log(`out_updated: ${out_updated}`);
};