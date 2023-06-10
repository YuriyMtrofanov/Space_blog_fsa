const categoriesMock = require("../mock/categories.json");
const Category = require("../models/Category");

module.exports = async () => {
    const categories = await Category.find();
    if (categories.length !== categoriesMock.length){
        createInitialEntity(Category, categoriesMock);
    }
};

async function createInitialEntity(Model, mockData){
    await Model.collection.drop();
    return Promise.all(
        mockData.map(async item => {
            try {
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            } catch (error) {
                return
            }
        })
    )
};
