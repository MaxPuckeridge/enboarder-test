const express = require('express');
const bodyParser = require('body-parser');

const getCapsules = require('./routes/get-capsules');
const getLandingPad = require('./routes/get-landing-pad');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/capsules', getCapsules);
app.get('/landing-pad/:landingPadId', getLandingPad);

app.listen('4000');
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
