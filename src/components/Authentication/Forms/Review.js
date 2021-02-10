import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { Container, ListItemText, IconButton, Button } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';

export const Review = ({formData, navigation}) =>{
    const { go } = navigation
    const { 
        firstName,
        lastName,
        username,
        email,
        password,
        country,
        state,
        city,
        zipCode,
        phone,
        addressLine1,
        addressLine2
     } = formData
    return (
        <Container maxWidth='sm'>
            <h2>My information!</h2>
            <RenderAccordion summary="Credatials" go={go} details ={[
                {'User name':username},
                {'First name':firstName},
                {'last name':lastName},
                {'Email':email},
            ]} />
            <RenderAccordion summary="account" go={go} details ={[
                {'Phone':phone},
                {'password':password},
                // {'Last Name':lastName},
                {'Country':country}
            ]} />
            <RenderAccordion summary="Address" go={go} details ={[
                {'State':state},
                {'city':city},
                {'Zip Code':zipCode},
                {'Address line 1':addressLine1},
                {'Address line 2':addressLine2},
                
            ]} />
            <Button
            variant='contained'
            color='primary'
            size='medium'
            style={{marginTop:'1.6rem'}}
            onClick={() => navigation.next()}
            >
            register
            </Button>
        </Container>
    )
}

export const RenderAccordion = ({summary, details, go}) =>(
    <Accordion>
    <AccordionSummary
    expandIcon={<ExpandMore />}
    >{summary}</AccordionSummary>
    <AccordionDetails>
    <div>
        {details.map((data, index) => {
            const objKey = Object.keys(data)[0]
            const objValue = data[Object.keys(data)[0]]
            return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
        })}
        <IconButton color='primary' component='span' onClick={() => go(`${summary.toLowerCase()}`)}>
            <EditIcon />
        </IconButton>
    </div>
    </AccordionDetails>
    </Accordion>
)
