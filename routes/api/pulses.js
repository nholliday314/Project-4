const express = require('express');
const router = express.Router();
const pulsesCtrl = require('../../controllers/api/pulses');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/pulses (read: retrieve all pulse survey responses)
router.get('/pulses/:userId', pulsesCtrl.getPulses);

// POST /api/pulses (create: create a new pulse)
router.post('/', pulsesCtrl.create);

// GET /api/pulses/:id (read: retrieve specific pulse survey response by id)
router.get('/:id', pulsesCtrl.getPulse);

// POST /api/pulses/:id (update: Update specific pulse survey response by id)
router.post('/:id', pulsesCtrl.updatePulse);

// DELETE /api/pulses/:id (destroy: Delete specific pulse survey response by id)
router.delete('/:id', pulsesCtrl.deletePulse);

module.exports = router;