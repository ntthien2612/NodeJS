const Article = require("./type/Article");
const Category = require("./type/Category");

const articleProcedure = new Map()
   .set("insert", require("./procedure/Article/insert--async-throw"))
   .set("select-by-id", require("./procedure/Article/select-by-id--async-throw"))
   .set("update", require("./procedure/Article/update--async-throw"))
   .set("delete-by-id", require("./procedure/Article/delete-by-id--async-throw"));

const categoryProcedure = new Map()
   .set("insert", require("./procedure/Category/insert--async-throw"))
   .set("select-by-id", require("./procedure/Category/select-by-id--async-throw"))
   .set("update", require("./procedure/Category/update--async-throw"))
   .set("delete-by-id", require("./procedure/Category/delete-by-id--async-throw"));

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