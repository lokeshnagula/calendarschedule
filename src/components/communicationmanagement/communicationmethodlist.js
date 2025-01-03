import React from 'react';

const CommunicationMethodList = ({ methods = [], onDelete, onEdit, onAdd }) => {
  return (
    <div>
      
      <ul>
        {/* Ensure that methods is always an array and map over it */}
        {methods.length > 0 ? (
          methods.map((method) => (
            <li key={method.id}>
              {method.name} - {method.description}
              <button onClick={() => onEdit(method)}>Edit</button>
              <button onClick={() => onDelete(method.id)}>Delete</button>
            </li>
          ))
        ) : (
          <li></li>
        )}
        
      </ul>
    </div>
  );
};

export default CommunicationMethodList;
