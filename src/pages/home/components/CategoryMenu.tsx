import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import Filter from './Filter'

export default function CategoryMenu() {
    const categories = useSelector((state: AppState) => state.categories)
    return (
        <>
            <section className="section">
                <div className="wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Filter>
                                    <h2 className="filter--title">Category menu</h2>
                                     <ul className="filter--link">
                                     {
                                            categories.categories.filter((e: any, i: number) => i < 5).map((e: any, i: number) => (
                                                <li key={i}> <Link to={`/category/${e.slug}`}>{e.title}</Link></li>
                                            ))
                                        }
                                     </ul>
                                     <Link to="/category/" className="btn btn--more">
                                        <span>More categories</span>
                                        <span className="right">
                                            <img src="/assets/icon-right.svg" alt="" />
                                        </span>
                                    </Link>
                                </Filter>
                            </div>
                            <div className="col-md-9 banner--wrap">
                                <Banner/>
                                <Banner/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
