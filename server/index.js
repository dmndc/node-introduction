const express = require('express');
const bodyParser = require('body-parser');
const bc = require(__dirname + '/controllers/book_controllers.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/../public/build'));

const baseURL = '/api/books';

app.get(baseURL, bc.read);
app.post(baseURL, bc.create);
app.put(`${baseURL}/:id`, bc.update);
app.delete(`${baseURL}/:id`, bc.delete);

app.listen(3000, () => { console.log('Server listening on port 3000'); });