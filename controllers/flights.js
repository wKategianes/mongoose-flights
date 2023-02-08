const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
        // Now you can pass both the flight and tickets in the res.render call
        })
        res.render('flights/index', { title: 'All Flights', flights})
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        
        res.render('flights/show', {title: 'Flight Detail', flight});
    });
}

function newFlight(req, res){
    res.render('flights/new', {title: 'Add Flight'});
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('flights/new');
    });
  }