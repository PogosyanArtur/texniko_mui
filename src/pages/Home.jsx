import React from 'react';
import MainLayout from '../layout/MainLayout'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'


const Home = () => {
  return (
    <MainLayout>
      <Banner/>
      <ProductList/>
    </MainLayout>
  )
}

export default Home


