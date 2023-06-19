import React from 'react'

function ResendOrForgetEmail() {
  return (
    <div>
        <div className='forget-card'>
          <div className='texts'>
            <h3 className='header'>Resend Email</h3>
            <p className='message'>Didn't receive comfirmation email? </p>
          </div>
          <input required type="email" placeholder="Email" className="input" />
        <button>Resend</button>
        </div>
    </div>
  )
}

export default ResendOrForgetEmail