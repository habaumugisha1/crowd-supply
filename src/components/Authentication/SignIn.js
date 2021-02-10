import React from 'react'
import "../../css/signup.css";
import viebegLog from "../../images/viebeg-logo.jpg";
import graph from "../../images/graph.png";
import { Button, Container, Link, TextField } from "@material-ui/core/";
import ReCAPTCHA from "react-google-recaptcha";
function SignIn(props) {

   const handleSubmit = () => {
       props.history.push('./dashboard')
    }
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
         <div className="signup__container">
            <div className="signup__image">
                <img src={viebegLog} alt="viebeg log" className="imageLogo"/>
                <img src={graph} alt="viebeg" className="myImage" />
            </div>
            <div className="signin">
                <div className="signin__header">
                    <h1>Sign in to VIEBEG</h1>
                    <h4>Provide your credantials</h4>
                </div>
                <Container maxWidth='sm' className="signin__form">
                    <TextField 
                    className="backgroundcolor"
                    variant="outlined"
                    label='Email'
                    name='email'
                    type='email'
                    margin='normal'
                    autoComplete='off'
                    fullWidth
                    required
                    />
                    <Link style={{marginTop:"20px",
                    display:'flex', marginBottom:'-10px', float:'center'}} href="./#">forgot password</Link>
                <div style={{display:'flex',}}>
                    <TextField 
                    className="backgroundcolor with"
                    variant='outlined'
                    label='Password'
                    name='password'
                    margin='normal'
                    type='password'
                    autoComplete='off'
                    // fullWidth
                    required
                    />
            
                    <ReCAPTCHA
                        className="recaptcha"
                        size
                        type="image"
                        sitekey="6Lf2ZVAaAAAAACrBSDHMQrgt4hlRT8Hh6Py1x-Ly"
                        onChange={onChange}
                    />
                    </div>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'center',marginTop:'2rem'}}>
                    
                    <Button 
                    className="myButton"
                    style={{backgroundColor: '#6DB2F8', paddingLeft:'1.3rem'}}
                    variant="contained" 
                    type="submit" 
                    color="primary" 
                    size="large"
                    onClick={handleSubmit}>signin</Button>
                    </div>

                    <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                        <h6>Don’t have a VIEBEG account yet?</h6>
                        <Link style={{marginLeft:"20px"}} href="./signup">SIGN UP</Link>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default SignIn
