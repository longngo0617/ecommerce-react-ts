import React from 'react'

export default function Card({giakm = true} :any ) {
    return (
        <div className="card">
            <div className="card--head">
                    <img src="/assets/item-1.jpg" alt=""/>
                    {giakm &&  <div className="card--percent">
                        <span>- 36 %</span>
                    </div>}
            </div>
            <div className="card--body">
                <h2 className="card--title">
                Product Title
                </h2>
                <h3 className="card--desc">
                Space for a small product description 
                </h3>
                <div className="card--footer">
                    <div className="card--price">
                    1.48 USD
                    </div>
                    <div className="btn btn-buy">
                        <span>Buy Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
