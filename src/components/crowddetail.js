import React from "react";
import {Link} from "react-router-dom";





const CrowdCard = ({product}) => (
    
    <div className="col-12 col-md-6 col-lg-4 pb-4 pr-2">
             <div className ="card"> 
               <div className="card-header bg-primary p-0">
                   <h6 className="text-white text-uppercase font-weight-bolder text-center mt-3 ">
                   {product.title}
                   </h6>
               </div>
               <img className="card-image-top" style={{height:'200px', width:'auto'}} src={product.image} />
               <div className="card-body bg-gray py-2">
                        <div className="row">
                        <span className="col"><b>Description</b></span><span className="col-auto">{product.description}</span>
                        </div>
                                       </div>
               <ul className="list-group list-group-flush bg-gray py-2">
                    <li className="list-group-item bg-gray">
                        <div className="row">
                        <span className="col">Funding level</span><span className="col-auto crowd-text-bolder">{product.fundinglevel}</span>
                        </div>
                    </li>
                    <li className="list-group-item bg-gray py-2">
                        <div className="row">
                        <span className="col text-info">Interest rate</span><span className="col-auto crowd-text-bold text-info">{product.interest}</span>
                        </div>
                        <div className="row">
                        <span className="col">Duration</span><span className="col-auto crowd-title font-weight-bold">{product.duration}</span>
                        </div>
                    </li>
                    <li className="list-group-item bg-gray py-2">
                        <div className="row">
                        <span className="col">Investors</span><span className="col-auto crowd-title font-weight-bold">{product.investors}</span>
                        </div>
                        <div className="row">
                        <span className="col">Funding limit</span><span className="col-auto crowd-title font-weight-bold">{product.fundinglimit}</span>
                        </div>
                    </li>
                    <li className="list-group-item bg-gray py-2 border-bottom-0">
                        <div className="row mx-2">
                        <span className="col crowd-text-bolder">{product.alreadyinvested}</span><span className="col-auto line-heihgt-crowd mt-1">Already invested</span>
                        </div>
                    </li>
               </ul>
                <Link to="/crowddetail" className="btn-crowd btn-primary btn-block">Invest now</Link>
             </div>

           </div>

      );

      export default CrowdCard

