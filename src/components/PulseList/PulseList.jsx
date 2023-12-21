import React, { useState } from 'react';
import PulseModal from "../../pages/PulsePage/PulseModal";
import EditPulseForm from '../EditPulseForm/EditPulseForm';
import * as pulsesService from '../../utilities/pulses-service'
import './PulseList.css';

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
    setIsEditing(false)
  };



  const pulseListItems = pulses.map((s, idx) => (
    <li key={idx} className="PulseListItem" onClick={() => handleItemClick(s)}>
      {s.title}
      <div className="title">Rating {s.rating}</div>
      {s.date.toString()}
    </li>

  ));

  const handleDelete = async (pulseId) => {
    try {
      const pulse = await pulsesService.deletePulse(pulseId)
      closeModal();
    } catch {


    }
  };

  return (
    <div>
      <ul className="PulseList">
        {pulseListItems}
      </ul>
      {selectedItem && (
        <PulseModal onClose={closeModal}>
          {!isEditing && (
            <div className="PulseListItem">
              <div className="selected-item-info">
                <div className="title-popup">{selectedItem.title}</div>
                <div className="rating-popup">Rating: {selectedItem.rating}</div>
                <div className="date-popup">{selectedItem.date.toString()}</div>
              </div>
              <div className="button-container">
                <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(selectedItem._id)}>Delete</button>
              </div>
            </div>
          )}
          {isEditing && (
            <div>
              <EditPulseForm selectedItem={selectedItem} updateIsEditing={() => setIsEditing(false)} updateSelectedItem={handleItemClick} closeModal={closeModal} />
            </div>
          )}
        </PulseModal>
      )}
    </div>
  );
}