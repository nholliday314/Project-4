const Pulse = require('../../models/pulse');

module.exports = {
  getPulses,
  getPulse,
  create,
  updatePulse,
  deletePulse
};

async function getPulses(req, res) {
  try {
    const pulseEntries = await Pulse.find({ userId: req.params.userId });
    res.status(200).json(pulseEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getPulse(req, res) {
  try {
    const pulseEntry = await Pulse.findById(req.params.id);
    if (!pulseEntry) {
      return res.status(404).json({ error: 'Pulse Entry not found' });
    }
    res.status(200).json(pulseEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function create(req, res) {
  console.log('create ctrl')
  try {
    const { title, rating, date, userId } = req.body;
    console.log('creating pulse', req.body)
    const newPulseEntry = await Pulse.create({ title, rating, date, userId });
    res.status(201).json(newPulseEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}

async function updatePulse(req, res) {
  try {
    const updatedPulseEntry = await Pulse.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPulseEntry) {
      return res.status(404).json({ error: 'Pulse Entry not found' });
    }
    res.status(200).json(updatedPulseEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deletePulse(req, res) {
  try {
    const deletedPulseEntry = await Pulse.findByIdAndDelete(req.params.id);
    if (!deletedPulseEntry) {
      return res.status(404).json({ error: 'Pulse Entry not found' });
    }
    res.status(200).json(deletedPulseEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}



