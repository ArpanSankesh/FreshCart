import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div className='mt-10'>
        <HeroBanner/>
        <Categories/>
        <BestSeller/>
    </div>
  )
}

export default Home