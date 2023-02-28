const Category = require("../../type/Category");

module.exports = async (
   in_record = new Category(),
   out_updated = new Category()
) => {
   console.log("update-category");
   console.log(`in_record: ${in_record}`);
   console.log(`out_updated: ${out_updated}`);
};