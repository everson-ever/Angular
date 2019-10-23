const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./src/routes'));

app.listen(3000, (req, res) => {
	console.log('http://localhost:3000');
});
