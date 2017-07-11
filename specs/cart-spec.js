const Test = require('./test');
const Cart = require('../app/models/cart');
const Location = require('../app/models/location/location');
const Address = require('../app/models/location/address');
const Company = require('../app/models/company');
const Item = require('../app/models/item');
const Product = require('../app/models/product');
const CartSchema = require('../app/dao/cart-schema');
const mongoose = require('mongoose');
require('../app/app');

class CartTest {
    testClass() {
        const product = this.createProduct();
        const cart = this.createCart(this.createCompany(this.createAddress(this.createLocation())), [this.createItem(product, 10, 2), this.createItem(product, 20, 3)]);
        const now = new Date();

        Test.equal(() => cart != null && cart, 'cart is not null');
        Test.equal(() => cart.amount == 80, 'cart value equal');
        Test.equal(() => cart.itens[0].product.name == "Atum ralado", 'product equal');
        Test.equal(() => cart.date.getDate() == now.getDate() && cart.date.getMonth() == now.getMonth() && cart.date.getFullYear() == now.getFullYear(), 'date equal');
    }

    testDB() {
        const product = this.createProduct();
        const cart = this.createCart(this.createCompany(this.createAddress(this.createLocation())), [this.createItem(product, 10, 2), this.createItem(product, 20, 3)]);

        var obj = new CartSchema(cart);

        obj.save((error, obj) => {
            if (error)
                return console.error(error);

            console.log('saved');
        });
    }

    createCart(company, itens) {
        const cart = new Cart();

        cart.company = company;

        for (var i = 0; i < itens.length; i++)
            cart.addItem(itens[i]);

        return cart;
    }

    createCompany(address) {
        const company = new Company();

        company.name = "Sonda Supermercados";
        company.image = "http://localhost/imagescreateProduct/supermarkets/sonda.png";
        company.address = address;
        company.cnpj = "03368522000139";

        return company;
    }

    createAddress(location) {
        const address = new Address();

        address.name = "Avenida General Edgar Facó";
        address.number = "361";
        address.neighborhood = "Piqueri";
        address.city = "São Paulo";
        address.state = "São Paulo";
        address.zipCode = "02924-000";
        address.location = location;

        return address;
    }

    createLocation() {
        const location = new Location();

        location.coordinates = [-23.5050643, -46.7069348];

        return location;
    }

    createItem(product, price, quantity) {
        const item = new Item();

        item.price = price;
        item.product = product;
        item.quantity = quantity;

        return item;
    }

    createProduct() {
        const product = new Product();

        product.barcode = "7891234567891";
        product.brand = "Gomes da Costa";
        product.image = "http://localhost/images/atum1.png";
        product.measure = "gramas";
        product.name = "Atum ralado";
        product.quantity = 300;
        product.section = "Enlatados";

        return product;
    }
}

const test = new CartTest();

test.testClass();

test.testDB();