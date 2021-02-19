import React, {useState} from 'react'
import { Button, Link } from '@material-ui/core';
import '../../css/DashboardPannel.css'
// import '../../css/layout.css'
import Instrument from '../../../src/images/instrument.png'

import {Instagram, LinkedIn, YouTube, Twitter, Facebook } from '@material-ui/icons';
import DashboardNavBar from './DashboardNavBar'
import Subcategoryproducts from "./Subcategoryproducts";
import Services from "./Services";
import { productData } from './ProductDammyData'
import Viebeglogo from './../../images/viebeg-logo.jpg'; 


function DashboardPannel() {
  const [search, setSearch] = useState("")
    return (
        <div>
        {/* <DashboardNavBar /> */}
        <section className="crowdhome" id="studio-header">
            
           <img className="img" src={Instrument} alt="productimage" />
           {/* <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-101 overflow-hidden">
              <h1 className="display-22 font-weight-bold">
              CHOOSE YOUR FUTURE
              </h1>
              
              <p className="lead text-primary-3 mb-0">
              Explore your options, search diseases and products</p>
              <div className="searchContainer text-light">
                <form>
                    <div>
                    <Button>Diseases</Button>
                    <Button>Products</Button>
                    </div>
                    <div className="input-search">
                        <input name="search" type="text" placeholder="Search for Products, and deseases" onChange={(event) => {setSearch(event.target.value)}}/>
                        <input name="search" type="submit" value="Search" />
                    </div>
                    
                </form>
              </div>
            </div>
          </div>
        </div> */}
            
      </section>
      <div className="products-container-root">
          <Subcategoryproducts search = {search} products={productData}/>
          
            <div className="upper-footer">
            <div>
              <div className="buttons">
                  <div className="contacts">
                    <Link href="#" color="inherit">
                        Contacts us
                    </Link>
                  </div>
                  <div className="feedbacks">
                    <Link href="#" color="inherit">
                        Give us feedback
                    </Link>
                  </div>

              </div>
              <div className="socialIcons">
                <div className="soIcon"><Instagram /></div>
                <div className="soIcon"> <LinkedIn /></div>
                <div className="soIcon"><YouTube /></div>
                <div className="soIcon"><Twitter /></div>
                <div className="soIcon"><Facebook /></div>
            </div>
              </div>
              <div className="terms">
                <div>
                  <ul>
                    <li> <Link href="#" color="inherit">Advisers</Link></li>
                    <li><Link href="#" color="inherit">Providers</Link></li>
                    <li><Link href="#" color="inherit">Data</Link></li>
                  </ul>
                </div>
                <div>  
                  <ul>
                    <li><Link href="#" color="inherit">Abouts</Link></li>
                    <li><Link href="#" color="inherit">Join our team</Link></li>
                    <li><Link href="#" color="inherit">Accessibility</Link></li>
                    <li><Link href="#" color="inherit">Add opportunities</Link></li>
                  </ul>
                </div>
                <div>
                <ul>
                    <li><Link href="#" color="inherit">Glossary</Link></li>
                    <li><Link href="#" color="inherit">Terms and conditions</Link></li>
                    <li><Link href="#" color="inherit">Privacy and cookies</Link></li>
                    <li><Link href="#" color="inherit">Modern slavery statement</Link></li>
                  </ul>
                  </div>
              </div>
            </div>
            <div className="upper-footer-slanted"></div>
            <div className="footer">
            <img src={Viebeglogo} alt="Viebeg"/> <p>&copy; VIEBEG 2021</p>
            </div>
      </div>
    </div>
    )
}

export default DashboardPannel