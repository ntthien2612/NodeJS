const path = require("path");
const fsPromises = require("fs/promises");
const Category = require("../../../type/Category");
const writeRecordHeaderToFile = require("./write-record-header-to-file--async-throw");
const writeRecordContentToFile = require("./write-record-content-to-file--async-throw");

module.exports = async (
   in_typeName = Map.name,
   in_record = new Category()
) => {
   try {
      /* --- prepare path to record's data folder */

      
      var recordFolderName = "id-" + in_record.get("@id");
      
      
      console.log(recordFolderName);

      var recordFolderPath = path.join(__dirname, "../../../data",in_typeName,recordFolderName);

      /* --- create folder for new record */
      await fsPromises.mkdir(recordFolderPath);

      /* --- write record's data to files */
      await writeRecordHeaderToFile(in_typeName, in_record, recordFolderPath);
      await writeRecordContentToFile(in_typeName, in_record, recordFolderPath);
   }
   catch (error) {
      throw error;
   }
}; // module.exports