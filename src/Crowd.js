import React from "react";
import Crowdinvest from "./components/crowdinvest";
import Crowd1 from "./images/crowd1.jpg";
import './css/layout.css';



const Crowd = () => (
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
      </div>
      );

      export default Crowd


