import React, { useState } from 'react';

const CommunicationMethodForm = ({ onSubmit, method = {} }) => {
  const [name, setName] = useState(method?.name || ''); // Preselected value from method props
  const [description, setDescription] = useState(method?.description || '');
  const [sequence, setSequence] = useState(method?.sequence || 1);
  const [isMandatory, setIsMandatory] = useState(method?.isMandatory || false);

  // List of predefined communication methods
  const predefinedMethods = ['LinkedIn Post', 'LinkedIn Message', 'Email', 'Phone Call', 'In-person', 'Other'];

  const handleSequenceChange = (e) => {
    const value = e.target.value;
    setSequence(value === '' ? '' : Number(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Method Name is required!');
      return;
    }

    onSubmit({ name, description, sequence, isMandatory });

    // Reset form fields after submission
    setName('');
    setDescription('');
    setSequence(1);
    setIsMandatory(false);
  };

  return (
    <form className="communication-method-form" onSubmit={handleSubmit}>
      <h3>Add Communication Method</h3>

      <div className="form-group">
        <label htmlFor="name">Method Name</label>
        <select
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        >
          <option value="">Select a method</option>
          {predefinedMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        />
      </div>

      <div className="form-group">
        <label htmlFor="sequence">Sequence</label>
        <input
          id="sequence"
          type="number"
          value={sequence}
          onChange={handleSequenceChange}
          placeholder="Enter Sequence"
          min="1"
        />
      </div>

      <div className="form-group checkbox-group">
        <label htmlFor="isMandatory">
          <input
            id="isMandatory"
            type="checkbox"
            checked={isMandatory}
            onChange={() => setIsMandatory(!isMandatory)}
          />
          Mandatory
        </label>
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default CommunicationMethodForm;
