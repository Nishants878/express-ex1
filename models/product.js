const fs = require("fs");
const path = require("path");
// const products = [];
const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
  );
const getProductsFromFile = (cb) =>{
  
    fs.readFile(p,(err,fileContent)=>{
        if(err){
           return cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
        
    })
}

module.exports = class product {
  constructor(t) {
    this.title = t;
  }
  save() {
    // products.push(this);
 getProductsFromFile(products =>{
 products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err)=>{
        console.log(err)
      })
 })
   
  }

  static fetchAll(cb) {
   getProductsFromFile(cb);

  }
};
