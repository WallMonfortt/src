const UserService = require("../services/users.services")

const getAllUsers = async(req, res, next) =>{
  try {
    const user = await UserService.getAll();
    res.json(user);
  } catch (error) {
    next(error);
  }
}

const getUserById = async(req, res, next) =>{
  try {
    const {id} = req.params;
    const user = await UserService.getById(id);
    return res.json(user);
  } catch (error) {
    next(error);
  }
}

const createUser = async(req, res, next) =>{
  try {
    const {firstname, lastname, age} = req.body;
    const newUser = {
      firstname,
      lastname,
      age
    };
    const user = await UserService.create(newUser);
    return res.json(user);
  } catch (error) {
    next(error);
  }
}

const updateUser = async(req, res, next) =>{
  const {id} = req.params;
  try {
    const {firstname, lastname, age} = req.body;
    const updateUser = {
      firstname,
      lastname,
      age
    };
    const user = await UserService.update(updateUser, id);
    if (user && user[0]){
      return res.json({message: "Se ha actualizado el registro correctamente"})
    }
    return res.json({message: "No se ha podido actualizar el registro"})
  } catch (error) {
    next(error);
  }
}

const deleteUser = async(req, res, next) =>{
  const {id} = req.params;
  try {
    const deleted = await UserService.delete(id);
    if (deleted){
      return res.json({message: "Se ha eliminado el registro correctamente"})
    }
    return res.json({message: "No se ha podido eliminar el registro"})
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}