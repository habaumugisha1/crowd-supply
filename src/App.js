import React, {useState} from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './css/layout.css';

import Crowd from './Crowd';
import Crowdall from './Crowdall';
import Crowddetail from './Crowddetail';
import Lendnow from './Lendnow';
import DashboardPannel from './components/Dashboard/DashboardPannel';
import ProductDetail from './components/Dashboard/ProductDetail';
import FakeLogin  from "./components/FakeLogin";
import ProtectedRouter from "./components/ProtectedRouter";
import { useHistory } from "react-router-dom";
import AdminPannel from './components/AdminPannel/AdminPannel';
import Deseases from './components/AdminPannel/Deseases';
import Subcategories from './components/Dashboard/subcategories';
import SignUp from "./components/Authentication/SignUp";
import SignIn from './components/Authentication/SignIn';

function App() {
let history = useHistory()
  const [isLogedIn, setIsLogedIn] = useState(true);

  const logIn = () => {
    setIsLogedIn(true)
    // history.push('/dashboard')
    console.log(isLogedIn)
  }
  const logOut = () => {
    setIsLogedIn(false)
    console.log(isLogedIn)
  }
  return (

    <div>
      <BrowserRouter>

      <Switch>

          <Route path="/" exact component={SignIn} />
          
          <Route path="/crowddetail" component={Crowddetail} />

          <Route path="/crowdall" component={Crowdall} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          

          <Route path="/lendnow" component={Lendnow} />
          <Route path="/adminpannel" component={AdminPannel} />
          <Route path="/deseases" component={Deseases} />
        
          
          <ProtectedRouter exact isAuth={isLogedIn} path="/dashboard" component={DashboardPannel} />
          <ProtectedRouter exact isAuth={isLogedIn} path="/subcategories" component={Subcategories} />

          <ProtectedRouter exact isAuth={isLogedIn} path="/product/:productId" component={ProductDetail} />
        <Route path="*">
            <div style={{ dispalay:"flex", textAlign:"center", alignItems:"center", marginTop:"20%"}}><h1> 🤗  404 Page Not found </h1></div>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;