// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  
})
// Categories have many Products
Category.hasMany(

)
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model:ProductTag,

  }
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    ProductTag,
  }
}); 
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
