import React from 'react';

function EmailCard({ icon, heading, message, buttonText, onClick }) {
  return (
    <div className="email-card">
      <div className="header">
        <div className="image">
          {icon}
        </div>
        <div className="content">
          <span className="title">{heading}</span>
          <p className="message">{message}</p>
        </div>
        <div className="actions">
          <button className="resend-email" type="button" onClick={onClick}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default EmailCard;
