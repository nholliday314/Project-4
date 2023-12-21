import React from 'react';
import './PulseModal.css';

const PulseModal = ({ children, onClose, }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        {children}
        
      </div>
    </div>
  );
};

export default PulseModal;