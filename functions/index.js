const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: functions.config().secret.database,
});

const URL = functions.config().secret.url;
const secretKey = functions.config().secret.key;

const app = express();
const db = admin.firestore();
app.use(cors({ origin: true }));
// Create
app.post("/api/contacts", (req, res) => {
  (async () => {
    try {
      if (req.body.token && req.body.action) {
        const response = await axios.post(
          `${URL}?secret=${secretKey}&response=${req.body.token}`
        );
        if (response.data.success && response.data.action === "contactform") {
          await db
            .collection("contacts")
            .doc("/" + uuidv4() + "/")
            .create({
              name: req.body.name,
              email: req.body.email,
              message: req.body.message,
            });
          return res
            .status(200)
            .send({ success: true, message: "contact form was saved" });
        } else {
          return res
            .status(401)
            .send({ success: true, message: "missing contac information" });
        }
      } else {
        return res.status(401).send({
          message:
            "there is not allowed to verify recaptcha form, please try again",
        });
      }
    } catch (err) {
      return (err) => res.send({ success: false, message: err.data });
    }
  })();
});

// Export the api to firebase Cloud functions
exports.app = functions.https.onRequest(app);
