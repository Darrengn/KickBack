// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const app = express()

//Standard GET Method
app.get('/', async (req, res) => {
    const snapshot = await admin.firestore().collection('users').get(); // Gets data from users collection
    let users = [];
    snapshot.forEach(doc => {
        let id = doc.id;
        let data = doc.data();
        users.push({id, ...data});
    });
    
    res.status(200).send(JSON.stringify(users)); //Sends user list back
});


//Standard POST Method
app.post('/', async (req, res) => {
    //Get user from req.body
    const user = req.body;
    //Add user to firestore and wait for them to finish
    await admin.firestore().collection('users').add(user);
    //send 201 status code(created)
    res.status(201).send();
});

//Creates HTTP Request for /passwords
exports.users = functions.https.onRequest(app);


/*
exports.name = functions.https.onRequest((req,res) =>{
    console.log('NAME CALLED')
    let type = req.method
    if(type == 'GET'){
        res.status(200).send(admin.firestore().collection('messages').doc('IyZEcWWm5qvUp4fFECq'))
    } else {
        res.status(200).send('OTHER')
    }
});

//addMessage() function

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection('messages').add({original: original});
    // Send back a message that we've successfully written the message
    res.json({result: `Message with ID: ${writeResult.id} added.`});
  });


//makeUppercase() Function

// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
.onCreate((snap, context) => {
  // Grab the current value of what was written to Firestore.
  const original = snap.data().original;

  // Access the parameter `{documentId}` with `context.params`
  functions.logger.log('Uppercasing', context.params.documentId, original);
  
  const uppercase = original.toUpperCase();
  
  // You must return a Promise when performing asynchronous tasks inside a Functions such as
  // writing to Firestore.
  // Setting an 'uppercase' field in Firestore document returns a Promise.
  return snap.ref.set({uppercase}, {merge: true});
});
*/