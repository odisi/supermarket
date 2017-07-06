const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const express = require('express');
const app = express();

app.use('/', require('./controllers/index-controller'));
app.use('/api/cart', require('./controllers/cart-controller'));

app.listen(3000);
console.log("Express server listening on port %d", 3000);