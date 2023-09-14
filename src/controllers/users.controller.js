const {User}= require("../database/models/");
const bcrypt = require('bcrypt');
module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json({ 
            results: users,
            totalResults: users.length,
        }) 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.getUserById = async (req, res, next) => {
    try{
        const user = await User.findByPk(req.params.id);
        res.user = user;
        next();
    }catch (error){
        res.status(500).json({message:error.message});
    }
}

module.exports.getOne = async (req , res) => {
    try {
        res.json(res.user);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports.createUser = async (req, res) => {
    const { name, email, userName, password } = req.body;
    try {
        const createdUser = await User.create({
            name,
            email,
            userName,
            password: await bcrypt.hash(password, 10),
        });

        res.status(201).json(createdUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.updateUser = async (req, res) => {
    // const id = req.query.id;
    const user = res.user;
    const { name, email, userName, password } = req.body;
    try {
        await User.update({
            name,
            email,
            userName,
            password,
        }, {
            where: {
                id: user.id
            }
        })
        await user.reload();
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports.deleteUser = async (req, res) => {

};