const userModel = require("../models/User");

const userController = {
    getAll: async (req, res) => {
        try {
            const users = await userModel.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getOne: async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id);
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    userCheck: async (req, res) => {
        try {
            const user = await userModel.findOne({ email: req.body.email, password: req.body.password });
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    create: async (req, res) => {
        try {
            const user = new userModel(req.body);
            await user.save();
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = userController;