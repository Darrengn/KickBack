// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore()
const app = express()


//Standard GET Method
app.get('/', async (req, res) => {
    try {
        const snapshot = await db.collection('event').get(); // Gets data from event collection
        let events = [];
        snapshot.forEach(doc => {
            let id = doc.id;
            let data = doc.data();
            events.push({id, ...data});
        });
        return res.status(200).send(JSON.stringify(events)); //Sends event list back
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
});


app.post('/', async (req, res) => {
    try {
        //Get event from req.body
        const event = req.body;
        //TODO: Make ID req.body.name + req.body.username
        id = req.body.name + req.body.numPeople
        console.log(id)
        //Add event to firestore and wait for them to finish
        await db.collection('event').doc(id).set(event);
        //send 201 status code(created)
        return res.status(201).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});


//Standard Delete Method
app.delete('/:event_id', async (req, res) => {
    try {

        const to_delete = await db.collection('event').doc(req.params.event_id).delete();
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});


//Get event from event_id
app.get('/:event_id', async (req, res) => {
    try {
        const snapshot = await db.collection('event').where('event_id', '==', parseInt(req.params.event_id)).get(); // Gets data from event collection
        let events = [];
        snapshot.forEach(doc => {
            let id = doc.id;
            let data = doc.data();
            events.push({id, ...data});
        });
        return res.status(200).send(JSON.stringify(events)); //Sends event list back
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
});


//Creates HTTP Request for /event
exports.event = functions.https.onRequest(app);

