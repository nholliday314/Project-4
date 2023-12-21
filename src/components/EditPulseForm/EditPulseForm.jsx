import { useState } from "react";
import * as pulsesService from '../../utilities/pulses-service'



export default function EditPulseForm({ selectedItem, updateIsEditing, updateSelectedItem }) {
    const [newPulse, setNewPulse] = useState(selectedItem);

    function handleChange(evt) {
        const newPulseData = { ...newPulse, [evt.target.name]: evt.target.value };
        setNewPulse(newPulseData);
    }

    async function handleNewPulse(evt) {
        evt.preventDefault();
        // addPulse(newPulse);
        try {
            const pulse = await pulsesService.editPulse(newPulse)
            setNewPulse({ title: "", rating: 1, date: new Date() });
            updateIsEditing();
            updateSelectedItem(pulse);
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
                readOnly
            />

            {/* change to save button and stop edit */}
            <button type="submit">Submit Pulse</button>
        </form>
    );


}