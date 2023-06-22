import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="footer">
        <div className="footer-content">
          <span>&copy; {currentYear} Directorate of ICT -</span>
          <span>Achievers University, Owo</span>
        </div>
      </footer>
    );
}

export default Footer