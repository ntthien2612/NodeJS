const Article = require("../database/type/Article");
const Category = require("../database/type/Category");

const articleProcedure = new Map()
   .set("insert", require("../database/procedure/Article/insert--async-throw"))
   .set("select-by-id", require("../database/procedure/Article/select-by-id--async-throw"))
   .set("update", require("../database/procedure/Article/update--async-throw"))
   .set("delete-by-id", require("../database/procedure/Article/delete-by-id--async-throw"));

const categoryProcedure = new Map()
   .set("insert", require("../database/procedure/Category/insert--async-throw"))
   .set("select-by-id", require("../database/procedure/Category/select-by-id--async-throw"))
   .set("update", require("../database/procedure/Category/update--async-throw"))
   .set("delete-by-id", require("../database/procedure/Category/delete-by-id--async-throw"));

const storedProcedure = new Map()
   .set(Article.name, articleProcedure)
   .set(Category.name, categoryProcedure);

exports.execute = async ( 
   typeName, procedureName,
   ...parameters
) => {
   await storedProcedure
      .get(typeName)
      .get(procedureName)
      .call(null, ...parameters);
}; // exports.execute