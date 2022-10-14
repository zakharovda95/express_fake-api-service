const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();

const json = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.use(helmet());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Success! Port: ${PORT}`));
