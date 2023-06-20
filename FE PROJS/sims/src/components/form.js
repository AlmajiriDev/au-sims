import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Form() {
  const [birthdate, setBirthdate] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState(null);

  const handleBirthdateChange = (date) => {
    setBirthdate(date);
  };

  const handleAppointmentDateChange = (date) => {
    setAppointmentDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can access the form field values (including birthdate and appointmentDate) using the state variables
  };

  return (
    <div className="registration">
      <form className="reg-form" onSubmit={handleSubmit}>
        <p className="title">Register New ID Management Account</p>
        <div className="flex">
          <label>
            <input required placeholder="Lastname" type="text" className="input" />
          </label>

          <label>
            <input required placeholder="Firstname" type="text" className="input" />
          </label>

          <label>
            <input required placeholder="Othernames" type="text" className="input" />
          </label>
        </div>

        <label>
          <input required placeholder="Department" type="text" className="input" />
        </label>

        <label>
          <input required placeholder="Designation" type="text" className="input" />
        </label>

        <label>
          <input required placeholder="Area of Discipline" type="text" className="input" />
        </label>

        <label>
          <DatePicker
            required
            placeholderText="Date of Birth"
            className="input"
            selected={birthdate}
            onChange={handleBirthdateChange}
          />
        </label>

        <label>
          <input required placeholder="Staff ID" type="text" className="input" />
        </label>

        <label>
          <DatePicker
            required
            placeholderText="Date of Appointment"
            className="input"
            selected={appointmentDate}
            onChange={handleAppointmentDateChange}
          />
        </label>
        <label>
          Passport Image:
          <input
            required
            type="file"
            accept="image/*"
            className="input"
          />
        </label>


        <button className="reg-submit form-submit" type="submit">
          Submit
        </button>
        <p className="signin">
          Already have an account? <a href="/">Sign in</a>
        </p>
      </form>
    </div>
  );
}

export default Form;
