import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import EmailCard from '../components/EmailCard'

function EmailSent() {
    
    function handleResendEmail(){
        console.log("Email Sent")
    }

  return (
    <EmailCard
      icon={<FontAwesomeIcon icon={faEnvelope}/>}
      heading="Please Confirm Your Email"
      message="A confirmation email has just been sent to abc@example.com. Please proceed to your email to confirm."
      buttonText="Resend Email"
      onClick={handleResendEmail}
    />

  )
}

export default EmailSent