const express = require('express');
const router = express.Router();
const Cart = require('../dao/cart-schema');

router.get('/', (req, res) => {
    Cart.find({}, (error, entity) => {
        res.send(entity);
    });
});

module.exports = router;