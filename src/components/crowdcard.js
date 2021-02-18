import React from "react";
import { useHistory } from "react-router-dom";






function CrowdCard ({product}) {
    let history = useHistory()

   const handleDetail = (productId) => {

       console.log(productId)
    //    alert('hi')
    history.push(`/product/${productId}`)
   //history.push(`/crowdall`)

        //return <Redirect to='/subcategories' />
    //onClick={handleDetail(product.id)}
    }
    return (
    
    
    <div className="col-12 col-md-6 col-lg-4 pb-4 pr-2">
             <div className ="card"> 
               <div className="card-header bg-primary p-0">
                   <h6 className="text-white text-uppercase font-weight-bolder text-center mt-3 ">
                   {product.title}
                   </h6>
               </div>
               <img className="card-image-top" alt="an product" style={{height:'200px', width:'auto'}} src={product.image} />
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
                <span onClick={() =>handleDetail(product.id)} key={product.id} className="btn-crowd btn-primary btn-block">Invest now</span>
                
             </div>

           </div>
    )};

      export default CrowdCard

