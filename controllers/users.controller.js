import User from "../models/user.js";


export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            atributes: ["id", "name", "email", "userName", "password"],
        });
        res.json({ 
            results: users,
            totalResults: users.length,
        }) 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getUserById = async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);
        res.json(user);
    }catch (error){
        res.status(500).json({message:error.message});
    }
}

export const createUser = async (req, res) => {
    const { name, email, userName, password } = req.body;
    try {
        const createdUser = await User.create({
            name,
            email,
            userName,
            password,
        });

        res.status(201).json(createdUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateUser = async (req, res) => {
    
};

export const deleteUser = async (req, res) => {

};