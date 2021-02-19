import React, {useState} from 'react'
import { Button, Link } from '@material-ui/core';
import '../../css/DashboardPannel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Crowd4 from '../../../src/images/crowd4.jpg'

import {Instagram, LinkedIn, YouTube, Twitter, Facebook } from '@material-ui/icons';
import DashboardNavBar from './DashboardNavBar'
import Products from "./Products";
import Services from "./Services";
import { productData } from './ProductDammyData'
import { categoriesData } from "../AdminPannel/category/CategoryData";
import Viebeglogo from './../../images/viebeg-logo.jpg'; 

function DashboardPannel() {
  const [search, setSearch] = useState("")
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase:"linear"
  };
    return (
        <div>
        {/* <DashboardNavBar /> */}
        <section className="crowdhome" id="studio-header">

            <img className="img" src={Crowd4} alt="productimage" />
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
    
      <div className="container mt-3 ">
        <div className="row pb-2 ml-2">
          <h2 className="text-uppercase crowd-text-bolder ">Viebeg's Crowd Supply</h2>
        <div className="row pb-4">
          <div className="col">
            <span className="crowd-text-bolder">15 Investors</span>
            <p>already registered on our platform</p>
          </div>
          <div className="col">
          <span className="crowd-text-bolder">15 Investors</span>
            <p>already registered on our platform</p>
          </div>
          <div className="col">
          <span className="crowd-text-bolder">15 Investors</span>
            <p>already registered on our platform</p>
          </div>
          <div className="col">
          <span className="crowd-text-bolder">15 Investors</span>
            <p>already registered on our platform</p>
          </div>
        </div>
        </div>

        <div className="row border border-green align-items-center">
          <div className= "col-7 bg-green py-3">
          <span className="crowd-text-bold text-white">CURRENT INVESTMENT OPPORTUNITIES</span>
          </div>
          <div className = "col-5 bg-white">
          
            <a href="/subcategories" className="crowd-text-bold text-green" >SHORT TERM OPPORTUNITIES</a>
          </div>
        </div>
        </div>
      <div className="products-container-root">
          <Products search = {search} products={categoriesData}/>
          <Services />
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
