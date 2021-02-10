import React from 'react'
import { useForm, useStep } from "react-hooks-helper";
import Names from "./Forms/Names";
import Email from "./Forms/Email";

import {Review} from "./Forms/Review";
import UserCredatial from './Forms/UserCreatial';
import Submit from './Forms/Submit';

const defaultData = { 
    firstName:'',
    lastName:'',
    email:'',
    username:'',
    password:'',
    country:'',
    state:'',
    city:'',
    addressLine1:'',
    addressLine2:'',
    zipCode:'',
    phone:''
}

const steps = [
    {id:'credatials'},
    {id:'account'},
    {id:'address'},
    {id:'review'},
    {id:'submit'},
]
function MultiStepForms() {
    const [formData, setFormData] = useForm(defaultData);
    const { step, navigation} = useStep({
        steps,
        initialStep:0
    })
    console.log(step)
    const props = {formData, setFormData, navigation}
    // eslint-disable-next-line default-case
    switch(step.id){
        case 'credatials':
            return <UserCredatial {...props} />
        case 'account':
            return <Names {...props} />
        case 'address':
            return <Email {...props} />;
        case 'review':
            return <Review {...props} />
        case 'submit':
            return <Submit {...props} />
    }

    return (
        <div>
            forms goes here
        </div>
    )
}

export default MultiStepForms
