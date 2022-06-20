import React from 'react'

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Wproduct } from '../components';

const Home = ({ products, bannerData, wproducts }) => (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className="products-heading">
        <h2>WOMENS HOODIES & JACKETS</h2>
        <p>Stay warm and cozy before, during and after your workout without sacrificing on style.</p>
      </div>

      <div className="products-container">
        {wproducts?.map((product) => <Wproduct key={product._id} wproduct={product} />)}
      </div>
      
      <div className="products-heading">
        <h2>MENS HOODIES</h2>
        <p>The perfect throw over for any situation, instant comfort to even the most uncomfortable of workouts.</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={ bannerData && bannerData[0]} />
    </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const wquery = '*[_type == "wproduct"]';
  const wproducts = await client.fetch(wquery);

  return {
    props: { products, bannerData, wproducts }
  }
}

export default Home;