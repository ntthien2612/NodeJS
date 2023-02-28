const Category = require("../../type/Category");

module.exports = async (
   in_recordId = "Infinity",
   out_selected = new Category()
) => {
   console.log("select-category-by-id");
   console.log(`in_recordId: ${in_recordId}`);
   console.log(`out_selected: ${out_selected}`);
};