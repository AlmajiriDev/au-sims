import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Form() {
  const [birthdate, setBirthdate] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false); 
  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Check if canvasRef.current is null
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    contextRef.current = context;
  }, []);
  
  

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

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    if (!contextRef.current) return;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };
  
  
    const stopDrawing = () => {
    if (!contextRef.current) return;
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };
  const openCanvas = () => {
    setIsCanvasOpen(true);
  };

  const closeCanvas = () => {
    setIsCanvasOpen(false);
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
        {/* <label>
        Signature:
        <canvas
          ref={canvasRef}
          className="signature-canvas"
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
        ></canvas>
      </label> */}

          <label>
          Signature:
          <button className="open-canvas-button" onClick={openCanvas}>
            Open Canvas
          </button>
        </label>

        {/* Canvas Popup */}
        {isCanvasOpen && (
          <div className="canvas-popup">
            <div className="canvas-popup-content">
              <canvas
                ref={canvasRef}
                className="signature-canvas"
                width={400}
                height={200}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
              ></canvas>
              <button className="close-canvas-button" onClick={closeCanvas}>
                Close Canvas
              </button>
            </div>
          </div>
        )}
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
