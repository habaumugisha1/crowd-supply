import React from 'react'

function Testmonials({data}) {
    return (
        <div className="container">
        <h3>Testmonial</h3>
            <div className="testmonial">
                <div className="testmoni__image">
                    <img src={data.image} alt="testmonial" />
                </div>
                <div className="testmoni__description">
                    <p>{data.testmonial}</p>
                </div>
            </div>
        </div>
    )
}

export default Testmonials
