const {user} = require("../models")

class UserService{
  static async getAll(){
    try {
      let results = await user.findAll();
      return results;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id){
    try {
      let result = await user.findByPk(id);
      if(result){
        return result
      }
      return {};
      
    } catch (error) {
      throw error;
    }
  }

  static async create(newUser){
    try {
      let result = await user.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(updateUser, id){
    try {
      let result = await user.update(updateUser, {where:{id}});
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id){
    try {
      let result = await user.destroy({where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService