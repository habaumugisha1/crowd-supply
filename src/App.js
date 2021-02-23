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
import Testimonial from './components/Dashboard/Testimonials';
import SignUp from "./components/Authentication/SignUp";
import SignIn from './components/Authentication/SignIn';
import RouteWithLayout from "./components/routeWithLayout";
import SideDrawer  from './SideDrawer';
import MySupply from './components/Dashboard/MySupply';

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
  const NotFound = () =>(
    <div style={{ dispalay:"flex", textAlign:"center", alignItems:"center", marginTop:"20%"}}><h1> 🤗  404 Page Not found </h1></div>
  )
  return (

    <div>
      <BrowserRouter>

      <Switch>

          <Route path="/" exact component={SignIn} />
          
          <RouteWithLayout layout={SideDrawer} path="/crowddetail" component={Crowddetail} />

          <RouteWithLayout layout={SideDrawer} path="/crowdall" component={Crowdall} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          

          <RouteWithLayout layout={SideDrawer} path="/lendnow" component={Lendnow} />
          <Route path="/adminpannel" component={AdminPannel} />
          <RouteWithLayout layout={SideDrawer} path="/deseases" component={Deseases} />
          <RouteWithLayout layout={SideDrawer} path="/testimonials" component={Testimonial} />
          
          <RouteWithLayout layout={SideDrawer} path="/dashboard" component={DashboardPannel} />
          <RouteWithLayout layout={SideDrawer}  path="/subcategories" component={Subcategories} />
          <RouteWithLayout layout={SideDrawer} path="/product/:productId" component={ProductDetail} />
          <RouteWithLayout layout={SideDrawer} path="/mysupply" component={MySupply} />

        <RouteWithLayout layout={SideDrawer} path="*" component={NotFound} />
            
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;