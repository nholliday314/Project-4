import { useState } from "react";
import * as pulsesService from '../../utilities/pulses-service'
import { getUser } from "../../utilities/users-service";



export default function NewPulseForm({ addPulse }) {
  const currentUser = getUser()
  const [newPulse, setNewPulse] = useState({
    title: '',
    rating: 1,
    date: new Date(),
    userId: currentUser._id
  });

  function handleChange(evt) {
    const newPulseData = { ...newPulse, [evt.target.name]: evt.target.value };
    setNewPulse(newPulseData);
  }

  async function handleNewPulse(evt) {
    evt.preventDefault();


    try {
      const pulse = await pulsesService.savePulse(newPulse)
      addPulse(pulse);
      setNewPulse({ title: "", rating: 1, date: new Date(), userId: currentUser._id });
    } catch {

    }
  }

  return (
    <form className="NewPulseForm" onSubmit={handleNewPulse}>
      <label htmlFor="">Title</label>
      <input
        name="title"
        value={newPulse.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="">Rating</label>
      <select name="rating" value={newPulse.rating} onChange={handleChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <label htmlFor="">Date</label>
      <input
        name="date"
        value={newPulse.date}
        readonly
      />
      {/* <label>{newPulse.date}</label> */}
      <button type="submit">Submit Pulse</button>
    </form>
  );


}