import React from 'react';
import { Button, Container, Link, TextField } from "@material-ui/core/";
import '../../../css/signup.css'

function UserCredatial({formData, setFormData, navigation}) {
    const { username,firstName, lastName, email} = formData
  
    return (
        // <div>
           <Container maxWidth='sm'>
        <h2 style={{marginBottom:'20px'}}>Sign up to VIEBEG</h2>
           
           
                <TextField 
                className="backgroundcolor"
                    variant="outlined"
                    label='User name'
                    name='username'
                    margin='normal'
                    autoComplete='off'
                    value={username}
                    onChange={setFormData}
                    fullWidth
                
                />
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <TextField 
                className="backgroundcolor with"
                    variant="outlined"
                    label='first name'
                    name='firstName'
                    margin='normal'
                    autoComplete='off'
                    value={firstName}
                    onChange={setFormData}
                    fluid
                    // fullWidth
                />
                <TextField 
                className="backgroundcolor with"
                    variant='outlined'
                    label='last name'
                    name='lastName'
                    margin='normal'
                    autoComplete='off'
                    value={lastName}
                    onChange={setFormData}
                    fluid
                    // fullWidth
                />
                
                
                </div>
                
                    <TextField 
                    className="backgroundcolor"
                        variant="outlined"
                        label='Eamil'
                        name='email'
                        type='email'
                        margin='normal'
                        autoComplete='off'
                        value={email}
                        onChange={setFormData}
                        fullWidth
                    />
                    
                <Button variant="contained" color="primary" onClick={() => navigation.next()}>Next</Button>
                <div style={{display:'flex', justifyContent:'space-between', marginTop:'20px'}}>
                        <h6>Alread have a VIEBEG account?</h6>
                        <Link href="./signin">SIGN IN</Link>
                    </div>
           </Container>
        // </div>
    )
}

export default UserCredatial
