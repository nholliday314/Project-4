import { useEffect, useState } from "react";
import PulseList from "../../components/PulseList/PulseList";
import NewPulseForm from "../../components/NewPulseForm/NewPulseForm";
import * as pulsesService from '../../utilities/pulses-service'
import { getUser } from "../../utilities/users-service";
import './PulsePage.css'

export default function PulsePage() {
  const [pulses, setPulses] = useState([]);
  const currentUser = getUser()

  const fetchPulses = async () => {
    try {
      const pulsesResponse = await pulsesService.getPulses(currentUser._id)

      // Update the state with the fetched data
      setPulses(pulsesResponse);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchPulses();
  }, []); // Empty dependency array ensures the effect runs only once (on mount)


  function addPulse(pulse) {
    setPulses([...pulses, pulse]);
  }
  // const [showPulses, setShowPulses] = useState(true);

  return (
    <div className="PulsePage">
      <h1>Pulse Survey</h1>
      <PulseList pulses={pulses} fetchPulses={fetchPulses} />
      <hr />
      <NewPulseForm addPulse={addPulse} />
    </div>

  );
}