var mongoose = require('mongoose');

var forcastSchema = new mongoose.Schema({
    cityName: {
        type: String,
    },
    temp: {
        type: Number,
    },
});

var Forcast = mongoose.model('Forcast', forcastSchema);

module.exports = Forcast;
