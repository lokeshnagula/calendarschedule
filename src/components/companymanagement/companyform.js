import React, { useState, useEffect } from 'react';

const CompanyForm = ({ onSubmit, company = {}, onSuccess }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [emails, setEmails] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState('');
  const [comments, setComments] = useState('');
  const [periodicity, setPeriodicity] = useState('2 weeks');

  // Populate state with company props if available
  useEffect(() => {
    if (company) {
      setName(company.name || '');
      setLocation(company.location || '');
      setLinkedIn(company.linkedIn || '');
      setEmails(company.emails || '');
      setPhoneNumbers(company.phoneNumbers || '');
      setComments(company.comments || '');
      setPeriodicity(company.communicationPeriodicity || '2 weeks');
    }
  }, [company]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!name || !location || !emails) {
      alert('Please fill in all required fields (Name, Location, Emails)');
      return;
    }

    // Call onSubmit with form data
    onSubmit({
      name,
      location,
      linkedIn,
      emails,
      phoneNumbers,
      comments,
      communicationPeriodicity: periodicity,
    });

    // Call onSuccess to show success message in parent
    onSuccess("Company added successfully!");

    // Reset form fields after submission
    setName('');
    setLocation('');
    setLinkedIn('');
    setEmails('');
    setPhoneNumbers('');
    setComments('');
    setPeriodicity('2 weeks');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Company Name</label>
        <input 
          type="text"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Company Name" 
          required 
        />
      </div>

      <div>
        <label>Location</label>
        <input 
          type="text"
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="Location" 
          required 
        />
      </div>

      <div>
        <label>LinkedIn Profile</label>
        <input 
          type="text"
          value={linkedIn} 
          onChange={(e) => setLinkedIn(e.target.value)} 
          placeholder="LinkedIn Profile" 
        />
      </div>

      <div>
        <label>Emails</label>
        <input 
          type="email"
          value={emails} 
          onChange={(e) => setEmails(e.target.value)} 
          placeholder="Emails" 
          required 
        />
      </div>

      <div>
        <label>Phone Numbers</label>
        <input 
          type="text"
          value={phoneNumbers} 
          onChange={(e) => setPhoneNumbers(e.target.value)} 
          placeholder="Phone Numbers" 
        />
      </div>

      <div>
        <label>Comments</label>
        <textarea 
          value={comments} 
          onChange={(e) => setComments(e.target.value)} 
          placeholder="Comments"
        />
      </div>

      <div>
        <label>Communication Periodicity</label>
        <select 
          value={periodicity} 
          onChange={(e) => setPeriodicity(e.target.value)}
        >
          <option value="2 weeks">Every 2 weeks</option>
          <option value="1 month">Every 1 month</option>
          <option value="1 week">Every 1 week</option>
        </select>
      </div>

      <button type="submit">Submit</button>
      
    </form>
  );
};

export default CompanyForm;
