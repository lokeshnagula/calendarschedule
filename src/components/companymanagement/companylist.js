import React from 'react';

const CompanyList = ({ companies, onDelete, onEdit }) => {
  return (
    <div>
      
      {companies.length > 0 ? (
        <ul>
          {companies.map((company) => (
            <li key={company.id}>
              <strong>{company.name}</strong>: {company.location}
              <br />
              LinkedIn: {company.linkedIn}
              <br />
              Emails: {company.emails}
              <br />
              Phone Numbers: {company.phoneNumbers}
              <br />
              Comments: {company.comments}
              <br />
              Communication Periodicity: {company.communicationPeriodicity}
              <br />
              <button onClick={() => onEdit(company)}>Edit</button>
              <button onClick={() => onDelete(company.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CompanyList;
