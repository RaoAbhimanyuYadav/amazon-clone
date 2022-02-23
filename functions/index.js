const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51KVXUZSJc9VaBPCEp9zeuj56FVEg4ZIRyZH2W7YfVJqHWHdLdu9annIqWsXnqguT3b5amN2gUiz5VGf3sv2o0riY00pFwrgfkd");

//API

//app config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; //request prems

  console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  //ok -creates
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/amazo1/us-central1/api
