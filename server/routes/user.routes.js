const express = require("express");
const User = require("../models/User");
const router = express.Router({ mergeParams: true });
const authMiddleware = require("../middleware/auth.middleware");

router.get("/", authMiddleware, async (req, res) => {
    try {
        const usersList = await User.find();
        res.status(200).send(usersList);
    } catch (error) {
        res.status(500).json({
            messge: "На сервере произошла ошибка. Попробуйте позже..."
        });
    }
});

router.patch("/:userId", authMiddleware, async (req, res) => {
    try {
        const { userId } = req.params;
        if (userId === req.user._id) {
            const updatedUser = await User.findByIdAndUpdate(userId, req.body, {new: true});
            res.send(updatedUser);
        } else {
            res.status(401).json({message: "Unauthorized"});
        }
    } catch (error) {
        res.status(500).json({
            messge: "На сервере произошла ошибка. Попробуйте позже..."
        });
    }
});

module.exports = router;
