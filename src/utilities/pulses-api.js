import sendRequest from "./send-request";
const BASE_URL = '/api/pulses';


export async function getPulse(pulseData) {
  return sendRequest(BASE_URL, 'GET', pulseData);
}

export async function getPulses(userId) {
  return sendRequest(`${BASE_URL}/pulses/${userId}`, 'GET');
}

export async function savePulse(pulseData) {
  return sendRequest(BASE_URL, 'POST', pulseData);
}

export async function editPulse(pulseData) {
  return sendRequest(`${BASE_URL}/${pulseData._id}`, 'POST', pulseData);
}

export async function deletePulse(pulseId) {
  return sendRequest(`${BASE_URL}/${pulseId}`, 'DELETE');
}