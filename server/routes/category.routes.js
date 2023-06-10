const express = require("express");
const router = express.Router({ mergeParams: true });
const Category = require("../models/Category");

router.get("/", async (req, res) => {
    try {
        const category = await Category.find();
        res.status(200).send(category);
    } catch (error) {
        res.status(500).json({
            message: "Oops! There is some error! Please try later..."
        });
    }
});

module.exports = router;