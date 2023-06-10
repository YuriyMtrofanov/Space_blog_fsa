const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });
const Article = require("../models/Article");
const User = require("../models/User");

router.get("/", authMiddleware, async (req, res) => {
    try {
        const articlesList = await Article.find();
        res.status(200).send(articlesList);
    } catch (error) {
        res.status(500).json({
            message: "Oops! There is some error! Please try later..."
        });
    }
});

router.post("/", authMiddleware, async (req, res) => {
    try {
        const newArticle = await Article.create({
            ...req.body,
            articleId: req.body._id
        });
        res.status(201).send(newArticle);
    } catch (error) {
        res.status(500).json({
            messge: "На сервере произошла ошибка. Попробуйте позже..."
        });
    }
});

router.patch("/:articleId", authMiddleware, async (req, res) => {
    try {
        const { articleId } = req.params;
        if (articleId === req.body._id) {
            const updatedArticle = await Article.findByIdAndUpdate(articleId, req.body, {new: true});
            res.send(updatedArticle);
        } else {
            res.status(401).json({message: "Unauthorized"});
        }
    } catch (error) {
        res.status(500).json({
            messge: "На сервере произошла ошибка. Попробуйте позже..."
        });
    }
});

router.delete("/:articleId", authMiddleware, async (req, res) => {
    try {
        const { articleId } = req.params;
        const removedArticle = await Article.findById(articleId);
        const user = await User.findById(req.user._id);
        if (removedArticle.author.toString() === req.user._id || user.accountType === "admin"){
            removedArticle.deleteOne();
            return res.send(null);
        } else {
            return res.status(401).json({message: 'Unauthorized'});
        }
    } catch (error) {
        console.log("messge:", error);
        res.status(500).json({
            messge: "На сервере произошла ошибка. Попробуйте позже..."
        });
    }
});

module.exports = router;