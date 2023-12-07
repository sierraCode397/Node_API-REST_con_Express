const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsServices{

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        images: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

async create(data){
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

async find(){
  return new Promise((resolve) =>{
    setTimeout(() => {
    resolve( this.products)
    }, 1000);
  });
  }

async findOne(id){
    const product = this.products.find(item => item.id === id);
    if(!product){
      throw boom.notFound('Product not Found');
    }
    if(product.isBlock){
      throw boom.conflict('Product is block');
    }
    return product
  }

async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('Product not Found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('Product not Found');
    }
    this.products.splice(index, 1);
    return {id}
  }
}

module.exports = ProductsServices;
