const Article = require("../../type/Article");

module.exports = async (
   in_recordId = "Infinity",
   out_deleted = new Article()
) => {
   console.log("delete-article-by-id");
   console.log(`in_recordId: ${in_recordId}`);
   console.log(`out_deleted: ${out_deleted}`);
};