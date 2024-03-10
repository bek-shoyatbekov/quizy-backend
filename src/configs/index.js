require('dotenv/config');

const config = {
    app: {
        port: process.env.PORT
    },
    sessionSecret: process.env.SESSION_SECRET,
    mongoURI: process.env.MONGO_URI
}


module.exports = Object.freeze(config);