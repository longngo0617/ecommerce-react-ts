import React from 'react'
import Card from '../../../components/Card'
import Filter from './Filter'

export default function Products() {
    return (
        <>
            <section className="section">
                <div className="wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Filter>
                                    <h2 className="filter--title">Best selling products</h2>
                                     <ul className="filter--link">
                                        <li> <a href="#">Kitchen</a></li>
                                        <li> <a href="#">Meat and fish</a></li>
                                        <li> <a href="#">Special nutrition</a></li>
                                        <li> <a href="#">Pharmacy</a></li>
                                        <li> <a href="#">Baby</a></li>
                                     </ul>
                                     <div className="btn btn--more">
                                         <span>More products</span>
                                         <span className="right">
                                             <img src="/assets/icon-right.svg" alt=""/>
                                         </span>
                                     </div>
                                </Filter>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-4 ">
                                        <Card giakm={false}/>
                                    </div>
                                    <div className="col-md-4 ">
                                        <Card/>
                                    </div>
                                    <div className="col-md-4 ">
                                        <Card/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
