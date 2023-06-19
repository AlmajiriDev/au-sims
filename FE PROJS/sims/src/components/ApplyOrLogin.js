import React from 'react'

function ApplyOrLogin({header, btnText, btnAction}) {
  return (
    <div className="login-page">
    <p className="login-header">{header}</p>
    <form>
      <div className="reg-form">
        <label>
          <p className='input-header'>Staff ID</p>
          <input required type="text" placeholder="Staff ID" className="input" />
        </label>

        <label>
          <p className='input-header'>Email</p>
          <input required type="email" placeholder="Email" className="input" />
        </label>
      </div>

      <button className="reg-submit" onClick={btnAction} >{btnText}</button>
    </form>
  </div>
  )
}

export default ApplyOrLogin