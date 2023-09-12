const { faker } = require('@faker-js/faker');

class UserServices{

  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        lastName: faker.commerce.productName(),
      });
    }
  }

async create(data){
    const newUser = {
      id: faker.string.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

async find(){
  return new Promise((resolve) =>{
    setTimeout(() => {
    resolve( this.users)
    }, 5000);
  });
  }

async findOne(id){
    return this.users.find(item => item.id === id);
  }

async update(id, changes){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('User not found')
    }
    const categorie = this.users[index];
    this.users[index] = {
      ...categorie,
      ...changes
    };
    return this.users[index];
  }

async delete(id){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('User not found')
    }
    this.users.splice(index, 1);
    return {id}
  }
}

module.exports = UserServices;
