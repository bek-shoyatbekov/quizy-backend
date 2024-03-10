/** @format */

const firebaseAdmin = require("firebase-admin");
const configs = require("../../configs/index.js");

const serverKey = require("../../../firebase-credentials.json");
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serverKey),
    databaseURL: "https://quizy-fd701-default-rtdb.firebaseio.com"
})

module.exports = firebaseAdmin;