import { Button, Link } from '@material-ui/core';
import React from 'react'
import { authentication } from "./utils";
import "./FakeLogin.css";
function FakeLogin({login, logout}) {
    
    return (
        <div className="fake">
        
       <Button className="button" onClick={() => logout()} variant="outlined" color="secondary">
            Log Out
      </Button>
      <Link href="/dashboard" >
    Dashboard
  </Link>
  <Link href="/signup" >
    Sign up
  </Link>
        </div>
    )
}

export default FakeLogin
