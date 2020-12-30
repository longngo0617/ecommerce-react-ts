import React from 'react'
import Card from '../../../components/Card'

export default function Related() {
    return (
        <div className="related">
            <div className="related--top">
                <div className="title"><span>Related products</span></div>
                <div className="title">
                    <span>More products</span>
                    <img src="/assets/right-green.svg" alt=""/>
                </div>
            </div>
            <div className="related--products">
                <div className="row">
                    <div className="col-md-3">
                        <Card giakm={false}/>
                    </div>
                    <div className="col-md-3">
                        <Card giakm={false}/>
                    </div>
                    <div className="col-md-3">
                        <Card />
                    </div>
                    <div className="col-md-3">
                        <Card giakm={false}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
