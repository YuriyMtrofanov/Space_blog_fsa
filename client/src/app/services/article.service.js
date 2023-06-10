import httpService from "./http.service";

const articleEndpoint = "article/";

const articleService = {
    get: async () => {
        const { data } = await httpService.get(articleEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(
            articleEndpoint,
            payload
        );
        return data;
    },
    edit: async (articleId, payload) => {
        const { data } = await httpService.patch(articleEndpoint + articleId, payload);
        return data;
    },
    delete: async (articleId) => {
        const { data } = await httpService.delete(articleEndpoint + articleId);
        return data;
    }
};

export default articleService;
