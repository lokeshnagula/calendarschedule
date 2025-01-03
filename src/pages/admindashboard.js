import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import './styles.css';

import { 
  fetchCompanies, 
  fetchCommunications, 
  addCompany, 
  updateCompany, 
  deleteCompany, 
  //addCommunication, 
  updateCommunicationMethod, 
  deleteCommunicationMethod, 
  addCommunicationMethod, 
  fetchCommunicationMethods 
} from '../services/api';  

import CompanyForm from '../components/companymanagement/companyform';
import CompanyList from '../components/companymanagement/companylist';
import CommunicationMethodForm from '../components/communicationmanagement/communicationmethodform';
import CommunicationMethodList from '../components/communicationmanagement/communicationmethodlist';
//import CommunicationModal from '../components/communicationmanagement/CommunicationModal';
import ScheduleCalendar from '../pages/ScheduleCalendar'; 

const AdminDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [communications, setCommunications] = useState([]);
  const [communicationMethods, setCommunicationMethods] = useState([]);
  const [editingCompany, setEditingCompany] = useState(null);
  const [editingMethod, setEditingMethod] = useState({ name: '', description: '', sequence: 1, isMandatory: false });
  //const [showModal, setShowModal] = useState(false);
  //const [selectedCompanies, setSelectedCompanies] = useState([]);
  //const [communicationType, setCommunicationType] = useState('');
  //const [communicationDate, setCommunicationDate] = useState('');
  //const [notes, setNotes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';  
    setIsLoggedIn(userLoggedIn);  

    if (userLoggedIn) {
      // Fetch companies, communications, and communication methods if logged in
      fetchCompanies().then((response) => {
        setCompanies(response.data);
      }).catch((error) => {
        console.error('Error fetching companies:', error);
      });

      fetchCommunications().then((response) => {
        setCommunications(response.data);
      }).catch((error) => {
        console.error('Error fetching communications:', error);
      });

      fetchCommunicationMethods().then((response) => {
        setCommunicationMethods(response.data);
      }).catch((error) => {
        console.error('Error fetching communication methods:', error);
      });
    }
  }, []);

  // Success message display
  const handleSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000); // Clear success message after 3 seconds
  };

  // Handle adding a new company
  const handleAddCompany = (company) => {
    if (editingCompany) {
      updateCompany(editingCompany.id, company).then(() => {
        setCompanies(prevCompanies => 
          prevCompanies.map(c => (c.id === editingCompany.id ? company : c))
        );
        setEditingCompany(null);  // Reset editing mode
      }).catch((error) => {
        console.error('Error updating company:', error);
      });
    } else {
      addCompany(company).then((response) => {
        setCompanies(prevCompanies => [...prevCompanies, response.data]);
        handleSuccessMessage('Company added successfully!');
      }).catch((error) => {
        console.error('Error adding company:', error);
      });
    }
  };

  // Handle deleting a company
  const handleDeleteCompany = (id) => {
    deleteCompany(id).then(() => {
      setCompanies(prevCompanies => prevCompanies.filter((company) => company.id !== id));
    }).catch((error) => {
      console.error('Error deleting company:', error);
    });
  };

  // Handle editing a company
  const handleEditCompany = (company) => {
    setEditingCompany(company);
  };

  // Handle adding a new communication method
  const handleAddCommunicationMethod = (method) => {
    if (editingMethod.id) {
      updateCommunicationMethod(editingMethod.id, method).then(() => {
        setEditingMethod({ name: '', description: '', sequence: 1, isMandatory: false });
      }).catch((error) => {
        console.error('Error updating communication method:', error);
      });
    } else {
      addCommunicationMethod(method).then((response) => {
        setEditingMethod({ name: '', description: '', sequence: 1, isMandatory: false });
        setCommunicationMethods(prevMethods => [...prevMethods, response.data]); // Add new method to list
      }).catch((error) => {
        console.error('Error adding communication method:', error);
      });
    }
  };

  // Handle deleting a communication method
  const handleDeleteCommunicationMethod = (id) => {
    deleteCommunicationMethod(id).then(() => {
      setCommunicationMethods(prevMethods => prevMethods.filter(method => method.id !== id));
    }).catch((error) => {
      console.error('Error deleting communication method:', error);
    });
  };

  // Handle editing a communication method
  const handleEditCommunicationMethod = (method) => {
    setEditingMethod(method);
  };

  return (
    <div>
      {isLoggedIn ? ( 
        <>
          <h1>Admin Dashboard</h1>

          {/* Display success message */}
          {successMessage && <div className="success-message">{successMessage}</div>}

          <h2>Company Form</h2>
          <CompanyForm onSubmit={handleAddCompany} company={editingCompany} onSuccess={handleSuccessMessage} />
          <CompanyList companies={companies} onDelete={handleDeleteCompany} onEdit={handleEditCompany} />

          <h2>Communication Method Form</h2>    
          <CommunicationMethodForm onSubmit={handleAddCommunicationMethod} method={editingMethod} />
          <CommunicationMethodList 
            methods={communicationMethods}  
            onDelete={handleDeleteCommunicationMethod} 
            onEdit={handleEditCommunicationMethod} 
            onAdd={handleAddCommunicationMethod} 
          />

          <h2></h2>
          <ScheduleCalendar communications={communications} />
        </>
      ) : (
        <div>Please log in to access the dashboard.</div>
      )}
    </div>
  );
};

export default AdminDashboard;
