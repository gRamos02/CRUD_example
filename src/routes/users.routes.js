const { Router } = require('express');
// import { createUser, getUserById, getUsers } from "../controllers/users.controller.js"
const controller = require('../controllers/users.controller.js')

const router = Router();

router.get("/", controller.getAllUsers);

router.get("/:id", controller.getUserById, controller.getOne);

router.post("/", controller.createUser);

router.patch('/:id', controller.getUserById, controller.updateUser);

router.delete('/:id', controller.getUserById, controller.deleteUser);


module.exports=router;