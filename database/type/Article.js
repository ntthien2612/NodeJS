const Article = class extends Map {
   constructor(...params) {
      super(...params);
      
      for (var key of Article.fieldNames) {
         if (this.has(key))
            { /* do nothing */; }
         else
            this.set(key, null);
      } // for .. of
      
      return this;
   }

   static fieldNames = [
      "@id",
      "title",
      "short-title",
      "keywords",
      "edited-datetime",
      "category-id",
      "content"
   ];
}; // Article

module.exports = Article;