import { useState } from "react";
import PulseList from "../../components/PulseList/PulseList";
import NewPulseForm from "../../components/NewPulseForm/NewPulseForm";

export default function PulsePage() {
  const [pulses, setPulses] = useState([  ]);

  function addPulse(pulse) {
    setPulses([...pulses, pulse]);
  }
  // const [showPulses, setShowPulses] = useState(true);

  return (
    <div className="PulsePage">
      <h1>Pulse Survey</h1>
      <PulseList pulses={pulses} />
      <hr />
      <NewPulseForm addPulse={addPulse} />
    </div>

  );
}