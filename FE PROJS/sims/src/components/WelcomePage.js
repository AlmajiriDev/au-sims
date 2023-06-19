import React from 'react'
import { useNavigate } from 'react-router-dom'
function WelcomePage() {
  const navigate = useNavigate()
  return (
    <div className="container-home">
      <div className="content">
        <div className="text">
          <h2>Welcome to Achievers University Staff/Student ID Management System (AU-SIMS)</h2>
          <p>
            Apply for your staff ID card easily and track its processing with our user-friendly system. Say goodbye to paperwork and manual processing as you can complete the entire application process online.
          </p>
          <p>
            AU-SIMS keeps you updated on the status of your card, allowing you to monitor its progress effortlessly. Experience a hassle-free and convenient way to obtain your staff ID card with AU-SIMS.
          </p>
          <p>
            Join us today and enjoy the convenience and efficiency of AU-SIMS. Welcome to AU-SIMS, where applying for your staff ID card has never been easier!
          </p>
        <button className="apply-button" onClick={()=> navigate('/register')}>Click Here to Apply</button>
        </div>
        <div className="image">
          <img src="../20922.png" alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default WelcomePage