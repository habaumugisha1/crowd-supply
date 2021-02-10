import React from "react";
import Crowdinvest from "./components/crowdinvestment";
import Crowd1 from "./images/crowd4.jpg";
import './css/layout.css';
import Testmonials from "./components/Testmonials";


const Crowdall = () => {
  const disease = {
    image: Crowd1,
    testmonial:"I would like to make it clear, that the good people of Morgantown, and indeed all of West Virginia have a genuine World Class orthopedic surgeon in their midst.  I have known Dr. Post for over 2 decades, and have seen and interacted with him at many national, and international conferences on the knee.  He is very well respected, internationally, for his depth of knowledge and rational approach to all knee conditions.  He has a special interest in problems related to Kneecap Problems (a recognized, particularly difficult area within the field of orthopedic surgery) and his logical, careful clinical approach to these patients are known to be safe and effective, and minimally invasive."
  }
  return (
    <div>
      <section className="crowdhome" id="studio-header">
        <div className="crowdoverlay" />
        <img className="img" alt="header" src={Crowd1} />
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 overflow-hidden">
              <h1 className="display-2 font-weight-bold text-white">
              Crowd Supply
              </h1>
              {/* Text */}
              <p className="lead text-light mb-0">
              Help us deliver live-saving health products in challenging environments, just in time.             </p>
            </div>
          </div>
        </div>
      </section>
      <Crowdinvest />
      <Testmonials data={disease} />
      </div>
  )
      };

      export default Crowdall


