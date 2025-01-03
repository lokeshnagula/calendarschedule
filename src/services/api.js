import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your actual local API URL
// Replace with your actual API URL

// Helper function to log errors
const handleError = (error, operation) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    console.error(`${operation} - Response error:`, error.response);
    console.error('Status:', error.response.status);
    console.error('Data:', error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error(`${operation} - Request error:`, error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error(`${operation} - Error message:`, error.message);
  }
};

// Fetch companies
export const fetchCompanies = async () => {
  try {
    const response = await axios.get(`${API_URL}/companies`);
    return response;
  } catch (error) {
    handleError(error, 'Fetching companies');
    throw error;
  }
};

// Add a company
export const addCompany = async (company) => {
  try {
    const response = await axios.post(`${API_URL}/companies`, company);
    return response;
  } catch (error) {
    handleError(error, 'Adding company');
    throw error;
  }
};

// Update a company
export const updateCompany = async (id, company) => {
  try {
    const response = await axios.put(`${API_URL}/companies/${id}`, company);
    return response;
  } catch (error) {
    handleError(error, 'Updating company');
    throw error;
  }
};

// Delete a company
export const deleteCompany = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/companies/${id}`);
    return response;
  } catch (error) {
    handleError(error, 'Deleting company');
    throw error;
  }
};

// Fetch communication methods
export const fetchCommunicationMethods = async () => {
  try {
    const response = await axios.get(`${API_URL}/communication-methods`);
    return response;
  } catch (error) {
    handleError(error, 'Fetching communication methods');
    throw error;
  }
};

// Add a communication method
export const addCommunicationMethod = async (method) => {
  try {
    const response = await axios.post(`${API_URL}/communication-methods`, method);
    return response;
  } catch (error) {
    handleError(error, 'Adding communication method');
    throw error;
  }
};

// Update a communication method
export const updateCommunicationMethod = async (id, method) => {
  try {
    const response = await axios.put(`${API_URL}/communication-methods/${id}`, method);
    return response;
  } catch (error) {
    handleError(error, 'Updating communication method');
    throw error;
  }
};

// Delete a communication method
export const deleteCommunicationMethod = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/communication-methods/${id}`);
    return response;
  } catch (error) {
    handleError(error, 'Deleting communication method');
    throw error;
  }
};

// Fetch communications
export const fetchCommunications = async () => {
  try {
    const response = await axios.get(`${API_URL}/communications`);
    return response;
  } catch (error) {
    handleError(error, 'Fetching communications');
    throw error;
  }
};

// Add a communication
export const addCommunication = async (communicationData) => {
  try {
    const response = await axios.post(`${API_URL}/communications`, communicationData);
    return response;
  } catch (error) {
    handleError(error, 'Adding communication');
    throw error;
  }
};
