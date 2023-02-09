const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// All routes "starts with" / (root)

// GET /flights/:id/tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

// POST /flights/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.create);

// DELETE
router.delete('/tickets/:id', ticketsCtrl.delete);

module.exports = router;