const authentication = require("firebase/auth");
const auth = require("./admin");
// const admin = auth.admin;
const functions = require("firebase-functions");
const express = require("express");
// const cors = require("cors");
// The Firebase Admin SDK to access Firestore.
// const db = admin.firestore();
const app = express();


app.post("/", async (req, res) => {
const auth = authentication.getAuth();
const email = req.body.email;
const password = req.body.password;
authentication.signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    return res.status(200).send(user);
    })
    .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    return res.status(500).send(errorMessage);
    });
});

// Creates HTTP Request for /event
exports.user = functions.https.onRequest(app);