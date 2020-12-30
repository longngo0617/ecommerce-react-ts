import React from 'react'
import CategoryMenu from './components/CategoryMenu'
import Headline from './components/Headline'
import Products from './components/Products'

export default function Home() {
    return (
        <>
            <CategoryMenu/>
            <Products/>
            <Products/>
            <Headline/>
        </>
    )
}
