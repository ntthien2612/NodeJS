const findRecordFolderPathById = require("../sub-procedure/find-record-folder-path-by-id--async-throw");
const readRecordHeader = require("../sub-procedure/read-record-header--async-throw");
const readRecordContent = require("../sub-procedure/read-record-content--async-throw");
const Category = require("../../type/Category");


module.exports = async (
   in_recordId = "Infinity",
   out_selected = new Category()
) => { 
   try {
      /* --- find record's folder path */
      var found = { recordFolderPath: null };
      await findRecordFolderPathById(Category.name, in_recordId, found);
      
      /* --- read record's header and content */
      await readRecordHeader(found.recordFolderPath, out_selected);
      await readRecordContent(found.recordFolderPath, out_selected);
   }
   catch (error) {
      throw error;
   }
}; // module.exports