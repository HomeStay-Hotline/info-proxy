const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use('homes/:id', express.static(PUBLIC_DIR)); // edit homes/id/public

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('homes/:id/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/', router.api);

module.exports = app;
