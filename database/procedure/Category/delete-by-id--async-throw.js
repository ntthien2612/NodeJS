const Category = require("../../type/Category");

module.exports = async (
   in_recordId = "Infinity",
   out_deleted = new Category()
) => {
   console.log("delete-category-by-id");
   console.log(`in_recordId: ${in_recordId}`);
   console.log(`out_deleted: ${out_deleted}`);
};