// export const categoriesObject = {
//     solarSystem: { _id: "67rdca3eeb7f6fgeed471818", name: "Солнечная система" },
//     openSpace: { _id: "67rdca3eeb7f6fgeed471820", name: "Объекты открытого космоса" },
//     spaceExploration: { _id: "67rdca3eeb7f6fgeed471814", name: "Исследование космоса" },
//     universe: { _id: "67rdca3eeb7f6fgeed471822", name: "Вселенная" },
//     news: { _id: "67rdca3eeb7f6fgeed471824", name: "Новости" },
//     hobbyAstronomy: { _id: "67rdca3eeb7f6fgeed471829", name: "Любительская астрономия" }
// };

const categories = [
    { _id: "67rdca3eeb7f6fgeed471818", name: "Солнечная система" },
    { _id: "67rdca3eeb7f6fgeed471820", name: "Объекты открытого космоса" },
    { _id: "67rdca3eeb7f6fgeed471814", name: "Исследование космоса" },
    { _id: "67rdca3eeb7f6fgeed471822", name: "Вселенная" },
    { _id: "67rdca3eeb7f6fgeed471824", name: "Новости" },
    { _id: "67rdca3eeb7f6fgeed471829", name: "Любительская астрономия" }
];

function fetchAll() {
    return new Promise((resolve) => {
        setTimeout(function () {
            // resolve(categoriesObject);
            resolve(categories);
        }, 200);
    });
};

const getById = (id) => {
    return new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categories.find((category) => category._id === id));
        }, 200);
    });
};

export default {
    categories,
    fetchAll,
    getById
};
