import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Importing react-bootstrap for modal
import { addCommunicationMethod } from '../../services/api'; // Assume these functions exist for API calls

const CommunicationModal = ({ show, onClose, companyIds }) => {
  const [communicationType, setCommunicationType] = useState('LinkedIn Post'); // Default to 'LinkedIn Post'
  const [communicationDate, setCommunicationDate] = useState('');
  const [notes, setNotes] = useState('');
  const [otherType, setOtherType] = useState(''); // For the "Other" input field

  const handleSubmit = () => {
    const communicationData = {
      companyIds,
      type: communicationType === 'Other' ? otherType : communicationType,
      date: communicationDate,
      notes: notes
    };

    addCommunicationMethod(communicationData).then(() => {
      onClose();
      // Reset highlights or any UI changes needed
    }).catch((error) => {
      console.error('Error adding communication:', error);
    });
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Log Communication</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label>Communication Type</label>
          <select 
            value={communicationType} 
            onChange={(e) => {
              setCommunicationType(e.target.value);
              if (e.target.value !== 'Other') {
                setOtherType(''); // Reset "Other" input when a valid option is selected
              }
            }}
          >
            <option value="LinkedIn Post">LinkedIn Post</option>
            <option value="Email">Email</option>
            <option value="Phone Call">Phone Call</option>
            <option value="Other">Other</option> {/* Added the "Other" option */}
          </select>
        </div>
        {communicationType === 'Other' && (
          <div>
            <label>Specify Communication Type</label>
            <input 
              type="text" 
              value={otherType} 
              onChange={(e) => setOtherType(e.target.value)} 
              placeholder="Enter communication method"
            />
          </div>
        )}
        <div>
          <label>Date of Communication</label>
          <input type="date" value={communicationDate} onChange={(e) => setCommunicationDate(e.target.value)} />
        </div>
        <div>
          <label>Notes</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        <Button variant="primary" onClick={handleSubmit}>Log Communication</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommunicationModal;
