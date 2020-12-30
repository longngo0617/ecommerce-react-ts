import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs'
import ProductDetails from './components/ProductDetails'
import Related from './components/Related'


export default function Details() {
    return (
        <>
            <Breadcrumbs/>
            <section className="product">
                <div className="container">
                    <ProductDetails/>
                    <Related/>
                </div>
            </section>
        </>
    )
}
