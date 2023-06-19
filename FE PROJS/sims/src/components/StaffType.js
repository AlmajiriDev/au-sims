import React from 'react';
import { useNavigate } from 'react-router-dom';

function StaffType() {
  const navigate = useNavigate();

  const handleCardClick = (staffType) => {
    // Handle the click event and navigate to the appropriate route
    if (staffType === 'academic') {
      navigate('/academic-staff');
    } else if (staffType === 'non-academic') {
      navigate('/non-academic-staff');
    }
  };

  return (
    <div>
      <div className="cards container">
        <div className="card blue" onClick={() => handleCardClick('academic')}>
          <p className="tip">Staff</p>
          <p className="second-text">Academic/Non Academic</p>
        </div>
        <div className="card green" onClick={() => handleCardClick('non-academic')}>
          <p className="tip">Student</p>
          <p className="second-text">New & Returning</p>
        </div>
      </div>
    </div>
  );
}

export default StaffType;
