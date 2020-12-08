
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const config = require('./src/config/config');
const { sendMail} = require('./src/client/nodemailer');

const app = express();


app.use(cors({origin: "*" }));
app.use(bodyParser.json());


app.post("/sendmail", (req, res) => {
  console.log("request received");
  let data = req.body;
  sendMail(data, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
});

const PORT = config.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 are live on ${PORT}`));
