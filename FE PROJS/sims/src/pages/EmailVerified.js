import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import EmailCard from '../components/EmailCard'

function EmailVerified() {
    const navigate = useNavigate()
    
    function loginRedirect(){
        navigate('/login')
    }

  return (
    <EmailCard
      icon={<FontAwesomeIcon icon={faCheck}/>}
      heading="Congratulatons, Email Confirmed!"
      message="Kindly proceed to login to complete your registration."
      buttonText="Login"
      onClick={loginRedirect}
    />

  )
}

export default EmailVerified