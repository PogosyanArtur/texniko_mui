import React from 'react';
import MainLayout from '../layout/MainLayout'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import HomeOffer from '../components/HomeOffer'


const Home = () => {
  return (
    <MainLayout>
      <Banner/>
      <ProductList/>
      <HomeOffer/>
    </MainLayout>
  )
}

export default Home


