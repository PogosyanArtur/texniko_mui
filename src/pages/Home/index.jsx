import React from 'react';
import MainLayout from 'layout/MainLayout'
import Banner from './Banner'
import ProductList from './ProductList'
import Offer from './Offer'
import Gallery from './Gallery'
import WhyChooseUS from './WhyChooseUS'
import Massage from './Massage'


const Home = () => {
  return (
    <MainLayout>
      <Banner/>
      <ProductList/>
      <Offer/>
      <Gallery/>
      <WhyChooseUS/>
      <Massage/>
    </MainLayout>
  )
}

export default Home


