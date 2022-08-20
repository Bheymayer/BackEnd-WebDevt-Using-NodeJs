const mongoose = require('mongoose')
require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;

const listingSchema = new mongoose.Schema({
    listname: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    uploader: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    posted_date: {
        type: Date,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },
    reviews: {
        type: [String],
        required: true,
    }
})

const Listings = mongoose.model('Listings', listingSchema);

module.exports = Listings;


