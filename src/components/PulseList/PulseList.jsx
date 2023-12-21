import React, { useState } from 'react';
import PulseModal from "../../pages/PulsePage/PulseModal";
import EditPulseForm from '../EditPulseForm/EditPulseForm';


export default function PulseList({ pulses, fetchPulses }) {
  const [selectedItem, setSelectedItem] = useState(null);
  // TODO: keep track of is editing selectedItem
  const [isEditing, setIsEditing] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
    fetchPulses()
  };



  const pulseListItems = pulses.map((s, idx) => (
    <li key={idx} className="PulseListItem" onClick={() => handleItemClick(s)}>
      {s.title}
      <div className="title">Rating {s.rating}</div>
      {s.date.toString()}
    </li>

  ));


  return (
    <div>
      <ul className="PulseList">
        {pulseListItems}
      </ul>
      {selectedItem && (
        <PulseModal onClose={closeModal}>
          {/* TODO: show this if not editing */}
          {!isEditing &&
            (<div className="PulseListItem">
              {selectedItem.title}
              <div className="title">Rating {selectedItem.rating}</div>
              {selectedItem.date.toString()}
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => undefined}>Delete</button>
            </div>)

          }

          {/* TODO: show edit component if you are editing */}

          {
            isEditing && (
              <div>
                <EditPulseForm selectedItem={selectedItem} updateIsEditing={() => setIsEditing(false)} updateSelectedItem={handleItemClick} closeModal={closeModal} />
              </div>
            )
          }

        </PulseModal>
      )}
    </div>
  );
}