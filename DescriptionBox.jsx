import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="description-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box">Reviews (540) </div>
            </div>

            <div className="descriptionbox-description">
                <p> An e-commerce website is an online platform that enables the buying and selling of products or services over the internet. It acts as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and complete transactions without the need for physical presence. E-commerce websites have become highly popular due to their convenience, easy accessibility, and global reach.</p>
                <p> E-commerce platforms usually display products with detailed descriptions, images, prices, and available variations such as sizes and colors. Each product typically has its own dedicated page containing all relevant information to help customers make informed purchasing decisions.</p>

            </div>
        </div>
    )
}

export default DescriptionBox
