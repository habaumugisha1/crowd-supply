import { useState } from "react";


// const [isLogedIn, setIsLogedIn] = useState(false);

// export const login = () =>{
//     setIsLogedIn(true)
// }
export const authentication = {
    isLoggedIn:false,
    onAuthentication(){
        return this.isLoggedIn=true;
    },
    getLogInStatus(){
        return this.isLoggedIn;
    }
}