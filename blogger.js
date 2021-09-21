const { createIndex,deleteDocument ,addDocument, deleteIndex, searchByWildcardItemName } = require('./esIndexManager');


createIndex('news_headlines');
//deleteIndex("news_headlines");

// function News(date,short_description,link,category,headline,author) {
//     this.date= date;
//     this.short_description = short_description;
//     this.link = link;
//     this.category= category;
//     this.headline = headline;
//     this.author = author;
// }

// const news = new News("2017-04-26","Life is ruff.","https://www.huffingtonpost.com/entry/this-dog-really-wants-to-be-a-baby_us_58ff594be4b0b6f6014acf25","PARENTS","Nanna munde ninu entha murkha","Caroline Bologna");
// //addDocument("news_headlines","2","items",news);

// //deleteDocument("news_headlines","1");

// var searchQuery = {"headline":"nanna"}
// let search = '*'+'illi'+'*';
// searchByWildcardItemName("my_news_headlines",1,20,search);