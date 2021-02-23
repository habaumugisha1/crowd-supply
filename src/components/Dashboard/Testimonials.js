import React from 'react'
import "../../css/active.css"
import {categoriesData} from '../AdminPannel/category/CategoryData';
import Sponsor1 from "../../images/sponsor1.jpeg";
import Sponsor2 from "../../images/sponsor2.jpeg";
import Sponsor3 from "../../images/sponsor3.jpg";
import Sponsor4 from "../../images/sponsor4.jpg";

function Testimonials() {
    return (
        <div className="testimonial">
            <h2>General testimonials</h2>
            <div className="disease__testimonial">
            {categoriesData.map((category) => (
                <div className="image" data-text2={category.description} data-text={category.name}>
                    <img src={category.image} alt="testimonials" />
                </div>
            ))}            
            </div>
            <h2>Sponsors' testimonials</h2>
            <div className="sponsor__testimonial">
                <div className="sponsor__testim">
                    <img src={Sponsor1} alt="testimonials" />
                    <p style={{width:'23vw', marginTop:'10px'}}>Complete Anatomy, 3D4Medical’s revolutionary 3D Medical learning App is now available for Mac! Transform how you study anatomy by learning from highly detailed, accurate & interactive body structures. Listen to lectures form top anatomical experts and use cutting tools to create custom views deep into the anatomy.</p>
                </div>
                <div className="sponsor__testim">
                    <img src={Sponsor2} alt="testimonials" />
                    <p style={{width:'23vw', marginTop:'10px'}}>Complete Anatomy, 3D4Medical’s revolutionary 3D Medical learning App is now available for Mac! Transform how you study anatomy by learning from highly detailed, accurate & interactive body structures. Listen to lectures form top anatomical experts and use cutting tools to create custom views deep into the anatomy.</p>
                </div>
                <div className="sponsor__testim">
                    <img src={Sponsor3} alt="testimonials" />
                    <p style={{width:'23vw', marginTop:'10px'}}>Complete Anatomy, 3D4Medical’s revolutionary 3D Medical learning App is now available for Mac! Transform how you study anatomy by learning from highly detailed, accurate & interactive body structures. Listen to lectures form top anatomical experts and use cutting tools to create custom views deep into the anatomy.</p>
                </div>
                <div className="sponsor__testim">
                    <img src={Sponsor4} alt="testimonials" />
                    <p style={{width:'23vw', marginTop:'10px',}}>Complete Anatomy, 3D4Medical’s revolutionary 3D Medical learning App is now available for Mac! Transform how you study anatomy by learning from highly detailed, accurate & interactive body structures. Listen to lectures form top anatomical experts and use cutting tools to create custom views deep into the anatomy.</p>
                </div>
            
            </div>
        </div>
    )
}

export default Testimonials
