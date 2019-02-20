import React from 'react';
import MainLayout from '../layout/MainLayout'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import HomeOffer from '../components/HomeOffer'
import Gallery from '../components/Gallery'


const Home = () => {
  return (
    <MainLayout>
      <Banner/>
      <ProductList/>
      <HomeOffer/>
      <Gallery/>
    </MainLayout>
  )
}

export default Home


