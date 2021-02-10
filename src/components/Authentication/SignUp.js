import React from 'react'
import "../../css/signup.css";
import viebegLog from "../../images/viebeg-logo.jpg";
import graph from "../../images/graph.png";
import MuiltiStepForm from "./MultiStepForms";
function SignUp() {
    return (
        <div className="signup__container">
            <div className="signup__image">
                <img src={viebegLog} alt="viebeg log" className="imageLogo"/>
                <img src={graph} alt="viebeg" className="myImage" />
            </div>
            <div className="signup__form">
                <MuiltiStepForm />
            </div>
        </div>
    )
}

export default SignUp
