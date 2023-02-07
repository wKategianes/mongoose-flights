const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['LAX', 'SFO', 'DEN', 'SAN', 'AUS', 'TPA', 'JFK'],
    arrival: {
        type: Date
    },
}});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United", "Delta"]
  },
  airport: {
    type: String,
    enum: ['LAX', 'SFO', 'DEN', 'SAN', 'AUS', 'TPA', 'JFK'],
    default: 'DEN'
  },

  flightNo: {
    type: Number,
    min:10,
    max: 9999,
  },

  departs: {
    type: Date,
    default: function(){
      let today = new Date();
    return today.setFullYear(today.getFullYear() + 1)
    }
  },
  destinations: [destinationSchema]
})

module.exports = mongoose.model("Flight", flightSchema);