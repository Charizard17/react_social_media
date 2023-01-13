import React from 'react'
import './register.css';

export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">Social Media</h3>
                <span className="registerDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, ex consequuntur.</span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input placeholder="Username" className="registerInput" />
                    <input placeholder="Email" className="registerInput" />
                    <input placeholder="Password" className="registerInput" />
                    <input placeholder="Password again" className="registerInput" />
                    <button className="registerButton">Signup</button>
                    <button className="registerRegisterButton">Login to your account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
