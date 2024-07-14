import React from 'react';

import  './Banner.css'
import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <div>
              <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale:Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
            <span>For Rent: House & Apartments</span>
            </div>
          </div>
        </div>
        <div className="banner">
          <img
            src="https://biznakenya.com/wp-content/uploads/2016/10/OLX.jpg"
            alt="banner"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
