/** @format */

const firebaseAdmin = require("firebase-admin");
const configs = require("../../configs/index.js");

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(configs.firebase),
    databaseURL: configs.firebase.databaseURL
})

module.exports = firebaseAdmin;