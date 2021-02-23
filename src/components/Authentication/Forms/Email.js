import React from 'react'
import { Button, Container, TextField } from "@material-ui/core/";

function Email({formData, setFormData, navigation}) {
    const { country,city,zipCode,  addressLine1, addressLine2} = formData
    console.log(navigation)
    return (
        <div>
            <Container maxWidth='xs'>
           <h2>Address</h2>
           
                <TextField 
                className="backgroundcolor"
                    variant='outlined'
                    label='Country'
                    name='country'
                    margin='normal'
                    autoComplete='off'
                    value={country}
                    onChange={setFormData}
                    fullWidth
                />
                <TextField 
                className="backgroundcolor"
                    variant='outlined'
                    label='City'
                    name='city'
                    margin='normal'
                    autoComplete='off'
                    value={city}
                    onChange={setFormData}
                    fullWidth
                />
                <TextField 
                className="backgroundcolor"
                    variant='outlined'
                    label='ZipCode'
                    name='zipCode'
                    margin='normal'
                    autoComplete='off'
                    value={zipCode}
                    onChange={setFormData}
                    fullWidth
                />
                <TextField 
                className="backgroundcolor"
                    variant="outlined"
                    label='Address Line 1'
                    name='addressLine1'
                    margin='normal'
                    autoComplete='off'
                    value={addressLine1}
                    onChange={setFormData}
                    fullWidth
                />
                <TextField 
                className="backgroundcolor"
                    variant="outlined"
                    label='Address Line 2'
                    name='addressLine2'
                    margin='normal'
                    autoComplete='off'
                    value={addressLine2}
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

export default Email
