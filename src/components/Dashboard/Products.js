import React from 'react'
import '../../css/DashboardPannel.css'
import { useHistory } from "react-router-dom";

function Products({products,search}) {
    let history = useHistory()

   const handleDetail = (productId) => {

    history.push(`/crowdall`)

    }
    return (
        <div>
            <div className="products-container">
              <div className="product-left">
                {products.filter((product) => {
                    if(search===""){
                        return product
                    } else if(product.title.toLowerCase().includes(search.toLowerCase())){
                        return product
                    }
                }).map((product) => (
                    <div className="product-left-card" onClick={() =>handleDetail(product.id)} key={product.id}>
                        <img src={product.image} alt="productimage" />
                        <div className="product-description" >
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>
                        </div>
                    </div>

                   ))}
                
               </div>
        </div>
    </div>
    )
}

export default Products
