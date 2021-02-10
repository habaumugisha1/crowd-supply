import React from 'react'
import Categories from './category/Categories'
import CategoryNav from './CategoryNav'

function ProductCategories() {
    return (
        <div style={{marginLeft:'30px'}}>
           <h3><CategoryNav/></h3> 
           <Categories/>
        </div>
    )
}

export default ProductCategories
