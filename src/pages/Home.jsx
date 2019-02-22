import React from 'react';
import MainLayout from '../layout/MainLayout'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import HomeOffer from '../components/HomeOffer'
import Gallery from '../components/Gallery'
import WhyChooseUS from '../components/WhyChooseUS'
import HomeMassage from '../components/HomeMassage'


const Home = () => {
  return (
    <MainLayout>
      <Banner/>
      <ProductList/>
      <HomeOffer/>
      <Gallery/>
      <WhyChooseUS/>
      <HomeMassage/>
    </MainLayout>
  )
}

export default Home


