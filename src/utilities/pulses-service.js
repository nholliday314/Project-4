import * as pulsesAPI from './pulses-api';

export async function savePulse(pulseData) {
  const pulse = await pulsesAPI.savePulse(pulseData);
  return pulse
  // return getPulse();
}


export async function editPulse(pulseData) {
  const pulse = await pulsesAPI.editPulse(pulseData);
  return pulse
  // return getPulse();
}

export async function getPulses(userId) {
  const pulse = await pulsesAPI.getPulses(userId);
  return pulse
  // return getPulse();
}

export async function deletePulse(pulseId) {
  const pulse = await pulsesAPI.deletePulse(pulseId);
  return pulse
  // return getPulse();
}

