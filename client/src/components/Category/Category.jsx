import React from 'react'
import "./Category.css"
import { Link } from 'react-router-dom'
import { address, crop, diamond, pencil, person, star, videos } from '../../assets/assets'

const Category = () => {
  return (
    <div className="category">
        <h2>Categories</h2>
        <div className="category_content">
            <div className="category_item">
                <img src={videos} alt="" />
                <div>Videos</div>
            </div>

            <div className="category_item">
                <img src={address} alt="" />
                <div>Address</div>
            </div>

            <div className="category_item">
                <img src={crop} alt="" />
                <div>Crop Care</div>
            </div>

            <Link to="/products">
                <div className="category_item">
                    <img src={diamond} alt="" />
                    <div>Best Offers</div>
                </div>
            </Link>

            <div className="category_item">
                <img src={pencil} alt="" />
                <div>Soil Testing</div>
            </div>

            <div className="category_item">
                <img src={person} alt="" />
                <div>Expert Advice</div>
            </div>

            <div className="category_item">
                <img src={star} alt="" />
                <div>Rate Us</div>
            </div>
        </div>
    </div>
  )
}

export default Category