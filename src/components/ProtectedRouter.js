import React, {useState} from 'react'
import { Redirect, Route } from 'react-router-dom'
import { authentication } from './utils'

function ProtectedRouter(props) {
    const auth=props.isAuth
    console.log(auth)
    return (
        <Route path={props.path} render={data=> auth ? (
            <props.component {...data}></props.component>
        ) : (<Redirect to={{pathname:'/'}}></Redirect>)}>
        </Route>
    )
}

export default ProtectedRouter
