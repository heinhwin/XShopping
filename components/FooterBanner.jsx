import React from 'react';

const FooterBanner = ({ footerBanner: {
  discount, largeText2, saleTime, smallText
}}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>SUMMER SALE</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <h1>{smallText}</h1>
          <h3>Additonal 10% Off</h3>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner