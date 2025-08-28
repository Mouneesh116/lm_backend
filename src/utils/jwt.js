const jwt = require('jsonwebtoken');
 
const signAccessToken = (userId, role) =>
    jwt.sign({ sub: userId, role }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN || '15m'
});
 
const signRefreshToken = (userId, role) =>
    jwt.sign({ sub: userId, role, type: 'refresh' },
    process.env.REFRESH_TOKEN_SECRET_KEY, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d'
});
 
const verifyAccessToken = (token) => jwt.verify(token, process.env.JWT_SECRET_KEY);

const verifyRefreshToken = (token) => jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY);

module.exports = { signAccessToken,
                   signRefreshToken,
                   verifyAccessToken,
                   verifyRefreshToken };
 