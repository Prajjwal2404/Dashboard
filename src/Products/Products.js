import React from 'react'
import { FiSearch } from 'react-icons/fi';
import Dropdown from '../Dropdown/Dropdown';
import ProductItem from '../components/ProductItem';
import abstract from '../images/abstract.jpg'
import sarphens from '../images/sarphens.jpg'
import leaflet from '../images/leaflet.jpg'
import digitalArt from '../images/digitalArt.jpg'
import './Products.css'

export default function Products() {
    return (
        <div className='product-container'>
            <div className='product-title'>
                <h3>Product Sell</h3>
                <div className='filters'>
                    <div className='product-search'>
                        <FiSearch className='product-search-icon' />
                        <input type='text' name='product-search' placeholder='Search' />
                    </div>
                    <Dropdown
                        dropDownItems={['Last 24 hours', 'Last 7 days', 'Last 30 days', 'Last 90 days', 'Last 365 days']}
                        classname='product' />
                </div>
            </div>
            <div className='product-columns-wrapper'>
                <div className='product-columns-container'>
                    <h6 className='product-name'>Product Name</h6>
                    <h6>Stock</h6>
                    <h6>Price</h6>
                    <h6>Total Sales</h6>
                    <div className='border'></div>
                    <ProductItem img={abstract} productName='Abstract 3D' stock={32} price={45.99} sales={20} />
                    <ProductItem img={sarphens} productName='Sarphens Illustration' stock={32} price={45.99} sales={20} />
                    <ProductItem img={leaflet} productName='Leaflet' stock={32} price={45.99} sales={20} />
                    <ProductItem img={digitalArt} productName='Digital Art' stock={32} price={45.99} sales={20} />
                </div>
            </div>
        </div>
    )
}
