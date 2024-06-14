import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
         <div className="descriptionbox-nav-box">Description</div>
         <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
        <div className="descriptonbox-description">
          <p>An e-commerce website in an online platform that facilitate buying and selling of products or services over the Internet serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a phycical presence. E-commerce website have gained immense popularity due to their conenient accessibility, and the global reach they offer. </p>
          <p>E-commerce website typically disply products or services along with detailed descriptions, images, prices, and any available variation (e.g., sizes, colors). Each product usually has its own details with relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox;