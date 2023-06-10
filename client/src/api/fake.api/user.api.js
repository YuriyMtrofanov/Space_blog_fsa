const users = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        firstName: "Юрий",
        lastName: "Митрофанов",
        email: "yurasell@yandex.ru",
        password: "hashed password",
        accountType: "admin",
        sex: "male",
        img: "https://sun9-9.userapi.com/impg/WMnkXwN8HhR9GO1bFhTWQjMuIRB0wnLADRj2WQ/QtGDCh56zZQ.jpg?size=606x632&quality=96&sign=42f577c3fbc7de2cfb7355f32b6399d1&type=album",
        country: "Russia",
        city: "Saint-petersburg",
        birthDay: 540518400000, // Date.parse("1987-02-17"), new Date(540518400000).toLocaleString() = 17/02/1987
        about: [
            { _id: "1", content: "Я - автор данного приложения" },
            { _id: "2", content: "Данный проект является моим дипломом по курсу junior Frontend Developer от Result School" },
            { _id: "3", content: "Мне очень хотелось бы успешно завершить обучение и получить новую востребованную профессию" }
        ],
        socialNetworks: [
            { _id: "1", title: "vk.com", link: "https://vk.com/mitrofanov_yuriy", img: "" },
            { _id: "2", title: "github.com", link: "https://github.com/YuriyMtrofanov", img: "" },
            { _id: "3", title: "telegram.com", link: "https://web.telegram.org/k/#@Mitrofanov_Yuriy", img: "" }
        ], // нужно поместить в отдельную сущность
        selectedArticlesList: [
            "67rdca3eeb7f6fgeed471816",
            "67rdca3eeb7f6fgeed471817",
            "67rdca3eeb7f6fgeed471819",
            "67rdca3eeb7f6fgeed471821",
            "67rdca3eeb7f6fgeed471823"
        ], // массив из id избранных статей
        // likedArticles: [
        //     "67rdca3eeb7f6fgeed471816",
        //     "67rdca3eeb7f6fgeed471817",
        //     "67rdca3eeb7f6fgeed471819",
        //     "67rdca3eeb7f6fgeed471821",
        //     "67rdca3eeb7f6fgeed471823"
        // ], // ссылка на отдельную сущность (пересекается с articles) массив из id понравившихся статей статей
        // selectedAuthorsList: [
        // ], // массив из id избранных авторов. Важно чтобы в этот список не попадали учетки с accountType: "visitor"
        rate: 15
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        firstName: "Дмитрий",
        lastName: "Гапета",
        email: "the_exalt@mail.ru",
        password: "hashed password",
        accountType: "author",
        sex: "male",
        img: "https://sun9-29.userapi.com/impf/c836522/v836522913/7ce5/S9Zr9EmWVKo.jpg?size=1612x2160&quality=96&sign=ddc3d546fcb71f5125c6eb819c488540&type=album",
        country: "Russia",
        city: "Saint-petersburg",
        birthDay: 623980800000,
        about: [
            { _id: "1", content: "Информация о пользователе" }
        ],
        socialNetworks: [
            { _id: "1", title: "vk.com", link: "https://vk.com/the_exalt", img: "" }
        ],
        selectedArticlesList: [],
        likedArticles: [],
        selectedAuthorsList: [],
        rate: 10
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        firstName: "Андрей",
        lastName: "Шокин",
        email: "bob007@tw.com",
        password: "hashed password",
        accountType: "author",
        sex: "male",
        img: "",
        country: "Russia",
        city: "Saint-petersburg",
        birthDay: 606873600000,
        about: [
            { _id: "1", content: "Информация о пользователе" }
        ],
        socialNetworks: [
            { _id: "1", title: "vk.com", link: "https://vk.com/shock_in", img: "" }
        ],
        selectedArticlesList: [],
        likedArticles: [],
        selectedAuthorsList: [],
        rate: 18
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        firstName: "Вероника",
        lastName: "Огородова",
        email: "green7311@fam.biz",
        password: "hashed password",
        accountType: "author",
        sex: "female",
        img: "https://sun9-68.userapi.com/impg/I8YEP5hf5iPC5N0NGyE1c_kiWf0JGEdtKO9E4Q/wl21FbfCEMk.jpg?size=1620x2160&quality=95&sign=16744eec435007dcb4457411ecdebef0&type=album",
        country: "Russia",
        city: "Kamennogorsk",
        birthDay: 819331200000,
        about: [
            { _id: "1", content: "Информация о пользователе" }
        ],
        socialNetworks: [
            { _id: "1", title: "vk.com", link: "https://vk.com/nikanigga1?z=photo43332207_457241293%2Falbum43332207_0%2Frev", img: "" }
        ],
        selectedArticlesList: [],
        likedArticles: [],
        selectedAuthorsList: [],
        rate: 12
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        firstName: "Оксана",
        lastName: "Ситник",
        email: "mindgames6878@phis.tech",
        password: "hashed password",
        accountType: "visitor",
        sex: "female",
        img: "https://wallpapercave.com/wp/wp10828517.png",
        country: "Russia",
        city: "Saint-petersburg",
        birthDay: 709603200000,
        about: [
            { _id: "1", content: "Информация о пользователе" }
        ],
        socialNetworks: [
            { _id: "1", title: "vk.com", link: "https://vk.com/oksana_raido", img: "" }
        ],
        selectedArticlesList: [],
        likedArticles: [],
        selectedAuthorsList: [],
        rate: 0
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        firstName: "Евгений",
        lastName: "Грузинцев",
        email: "mindes000@phis.tech",
        password: "hashed password",
        accountType: "author",
        sex: "male",
        img: "",
        country: "Russia",
        city: "Saint-petersburg",
        birthDay: 667353600000,
        about: [
            { _id: "1", content: "Информация о пользователе" }
        ],
        socialNetworks: [],
        selectedArticlesList: [],
        likedArticles: [],
        selectedAuthorsList: [],
        rate: 4
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        firstName: "Маргарита",
        lastName: "Дюжева",
        email: "",
        password: "hashed password",
        accountType: "visitor",
        sex: "female",
        img: "",
        country: "United Kingdom",
        city: "Oxford",
        birthDay: 630028800000,
        about: [
            { _id: "1", content: "Информация о пользователе" }
        ],
        socialNetworks: [
            { _id: "1", title: "vk.com", link: "https://vk.com/my_margaret", img: "" }
        ],
        selectedArticlesList: [],
        likedArticles: [],
        selectedAuthorsList: [],
        rate: 0
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        firstName: "Владимир",
        lastName: "Карабасов",
        email: "electro@underground.tech",
        password: "hashed password",
        accountType: "visitor",
        sex: "male",
        img: "",
        country: "United Kingdom",
        city: "Oxford",
        birthDay: 540518400000, // Date.parse("1987-02-17"), new Date(540518400000).toLocaleString() = 17/02/1987
        about: [
            { _id: "1", content: "Информация о пользователе" }
        ],
        socialNetworks: [],
        selectedArticlesList: [],
        likedArticles: [],
        selectedAuthorsList: [],
        rate: 0
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        firstName: "Витя",
        lastName: "Дёмин",
        email: "mono@super.com",
        password: "hashed password",
        accountType: "visitor",
        sex: "male",
        img: "",
        country: "Russia",
        city: "Saint-petersburg",
        birthDay: 540518400000, // Date.parse("1987-02-17"), new Date(540518400000).toLocaleString() = 17/02/1987
        about: [
            { _id: "1", content: "Информация о пользователе" }
        ],
        socialNetworks: [],
        selectedArticlesList: [],
        likedArticles: [],
        selectedAuthorsList: [],
        rate: 0
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        firstName: "Ксюша",
        lastName: "Дёмина",
        email: "ratatatata@underground.com",
        password: "hashed password",
        accountType: "visitor",
        sex: "female",
        img: "",
        country: "Russia",
        city: "Saint-petersburg",
        birthDay: 540518400000, // Date.parse("1987-02-17"), new Date(540518400000).toLocaleString() = 17/02/1987
        about: [
            { _id: "1", content: "Информация о пользователе" }
        ],
        socialNetworks: [],
        selectedArticlesList: [],
        likedArticles: [],
        selectedAuthorsList: [],
        rate: 0
    }
];
// if (!localStorage.getItem("users")) {
//     localStorage.setItem("users", JSON.stringify(users));
// }

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("users")));
        }, 2000);
    });
// const update = (id, data) =>
//     new Promise((resolve) => {
//         const users = JSON.parse(localStorage.getItem("users"));
//         const userIndex = users.findIndex((u) => u._id === id);
//         users[userIndex] = { ...users[userIndex], ...data };
//         localStorage.setItem("users", JSON.stringify(users));
//         resolve(users[userIndex]);
//     });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                users.find(
                    (user) => user._id === id
                )
            );
        }, 100);
    });

// const getById = (id) =>
// new Promise((resolve) => {
//     window.setTimeout(function () {
//         resolve(
//             JSON.parse(localStorage.getItem("users")).find(
//                 (user) => user._id === id
//             )
//         );
//     }, 100);
// });

export default {
    users,
    fetchAll,
    getById
    // update
};
