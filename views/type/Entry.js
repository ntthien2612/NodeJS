const Entry = class extends Map {
    constructor() {
       super();
 
       this.set("title", "Tiêu đề bài viết")
           .set("excerpt", "Đoạn văn bản nội dung ngắn...")
           .set("url", "#");
 
       return this;
    }
 }; // Entry

 module.exports = Entry;