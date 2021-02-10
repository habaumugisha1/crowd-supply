import React from 'react';
import { Button, Container, TextField } from "@material-ui/core/";


function Names({formData, setFormData, navigation}) {
    const { phone, password, confirmPassword } = formData
  
    return (
        <div>
           <Container maxWidth='xs'>
           <h2>Phone and password</h2>
           
                
    
            
                <TextField 
                className="backgroundcolor"
                    variant='outlined'
                    label='Phone number'
                    name='phone'
                    margin='normal'
                    autoComplete='off'
                    value={phone}
                    onChange={setFormData}
                    fullWidth
                />
                <TextField 
                className="backgroundcolor"
                    variant='outlined'
                    label='Choose Password'
                    name='password'
                    type='password'
                    margin='normal'
                    autoComplete='off'
                    value={password}
                    onChange={setFormData}
                    fullWidth
                />
                <TextField 
                className="backgroundcolor"
                    variant='outlined'
                    label='Confirm Password'
                    name='confirmpassword'
                    type='password'
                    margin='normal'
                    autoComplete='off'
                    value={confirmPassword}
                    onChange={setFormData}
                    fullWidth
                />
               
                <div style={{display:'flex', alignItems:'center',
                marginTop:'1.3rem'}}>
                    <Button variant="contained" color="secondary" onClick={() => navigation.previous()} style={{marginRight:'1.5rem'}}>Back</Button>
                    <Button variant="contained" color="primary" onClick={() => navigation.next()}>Next</Button>
                </div>
           </Container>
        </div>
    )
}

export default Names
