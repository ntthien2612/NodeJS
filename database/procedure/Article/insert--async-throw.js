const Article = require("../../type/Article");

module.exports = async (
   in_submitted = new Article(),
   out_inserted = new Article()
) => {
   console.log("insert-article");
   console.log(`in_submitted: ${in_submitted}`);
   console.log(`out_inserted: ${out_inserted}`);
};