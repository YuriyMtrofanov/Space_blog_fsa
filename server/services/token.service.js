const JWT = require("jsonwebtoken");
const config = require("config");
const  Token = require("../models/Token");


class TokenService {
    generate(payload) {
        const accessToken = JWT.sign(payload, config.get("accessSecretKey"));
        const refreshToken = JWT.sign(payload, config.get("refreshSecretKey"));
        return {
            accessToken,
            refreshToken,
            expiresIn: 3600
        };
    };
    async save(userId, refreshToken) {
        const data = await Token.findOne({ user: userId });
        if (data) {
            data.refreshToken = refreshToken;
            return data.save();
        }
        const token = await Token.create({ user: userId, refreshToken });
        return token;
    };
    validateRefresh(refreshToken) {
        try {
            return JWT.verify(refreshToken, config.get("refreshSecretKey"));
        } catch (error) {
            return null;
        }
    };
    validateAccess(accessToken) {
        try {
            return JWT.verify(accessToken, config.get("accessSecretKey"))
        } catch (error) {
            return null;
        }
    };
    async findToken(refreshToken) {
        try {
            return await Token.findOne({refreshToken});
        } catch (error) {
            return null;
        }
    };
};

module.exports = new TokenService();
