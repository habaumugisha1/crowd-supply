import React from "react";
import Equipment from "../images/equipment.jpg";
import Laboratory from "../images/laboratory.jpg";
import Furniture from "../images/furniture.jpg";
import CrowdCard from "../components/crowdcard";

const Crowdinvest = () => {
  
  const Crowdproducts = [

    {
      "id": 1,
      "title": "General Equipment",
      "fundinglevel": "10%",
      "interest": "20%",
      "duration": "12 months",
      "investors": "11",
      "fundinglimit": "$200,000",
      "image": Equipment,
      "description": "General Equipment for hospitals",
      "alreadyinvested": "$20,000"

    },

    {
      "id": 2,
      "title": "Laboratory",
      "fundinglevel": "20%",
      "interest": "30%",
      "duration": "12 months",
      "investors": "9",
      "fundinglimit": "$250,000",
      "image": Laboratory,
      "description": "Laboratory equipment for hospitals",
      "alreadyinvested": "$40,000"

    },

    {
      "id": 3,
      "title": "Hospital Furniture",
      "fundinglevel": "40%",
      "interest": "10%",
      "duration": "6 months",
      "investors": "24",
      "fundinglimit": "$500,000",
      "image": Furniture,
      "description": "Hospital Furniture for hospitals",
      "alreadyinvested": "$200,000"

    },

    {
      "id": 4,
      "title": "Hospital Furniture",
      "fundinglevel": "40%",
      "interest": "10%",
      "duration": "6 months",
      "investors": "24",
      "fundinglimit": "$500,000",
      "image": Furniture,
      "description": "Hospital Furniture for hospitals",
      "alreadyinvested": "$200,000"

    },

    {
      "id": 5,
      "title": "Hospital Furniture",
      "fundinglevel": "40%",
      "interest": "10%",
      "duration": "6 months",
      "investors": "24",
      "fundinglimit": "$500,000",
      "image": Furniture,
      "description": "Hospital Furniture for hospitals",
      "alreadyinvested": "$200,000"

    },

    {
      "id": 6,
      "title": "Hospital Furniture",
      "fundinglevel": "40%",
      "interest": "10%",
      "duration": "6 months",
      "investors": "24",
      "fundinglimit": "$500,000",
      "image": Furniture,
      "description": "Hospital Furniture for hospitals",
      "alreadyinvested": "$200,000"

    }


  ]

const Crowd = () => {
  return Crowdproducts.map(product=>
    <CrowdCard product={product}/>

    )

}
return (
     <div className="py-4">
       <div className="container">
        <div className="row pb-2 ml-2">
          <h2 className="text-uppercase crowd-text-bolder">Viebeg's Crowd Supply</h2>
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
          
            <a href="/crowdall" className="crowd-text-bold text-green" >ALL INVESTMENT OPPORTUNITIES</a>
          </div>
        </div>

         <div className="row pt-6">
          {Crowd()}
         </div>
       </div>
       </div>

)
};

      export default Crowdinvest

