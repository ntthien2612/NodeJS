const Article = class extends Map {
    constructor() {
       super();
 
       this.set("@id", "")
       .set("title", "")
       .set("keywords", "")
       .set("content", "");

        
       return this;
    }
 }; // Category
 
 module.exports = Article;