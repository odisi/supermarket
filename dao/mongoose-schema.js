class MongooseSchema {
    static cart(mongoose) {
        return mongoose.Schema({
            itens: [MongooseSchema.item(mongoose)],
            company: MongooseSchema.company(mongoose),
            date: Date,
            amount: Number
        });
    }

    static item(mongoose) {
        return mongoose.Schema({
            _id: false,
            product: MongooseSchema.product(mongoose),
            quantity: Number,
            price: Number
        });
    }

    static product(mongoose) {
        return mongoose.Schema({
            _id: false,
            name: String,
            barcode: String,
            image: String,
            quantity: Number,
            measure: String,
            brand: String,
            section: String
        });
    }

    static company(mongoose) {
        return mongoose.Schema({
            _id: false,
            name: String,
            image: String,
            address: MongooseSchema.address(mongoose),
            cnpj: String,
            url: String
        });
    }

    static address(mongoose) {
        return mongoose.Schema({
            _id: false,
            name: String,
            number: String,
            complement: String,
            zipCode: String,
            neighborhood: String,
            city: String,
            state: String,
            location: MongooseSchema.location(mongoose)
        });
    }

    static location(mongoose) {
        return mongoose.Schema({
            _id: false,
            type: String,
            coordinates: Array
        });
    }
}

module.exports = MongooseSchema;