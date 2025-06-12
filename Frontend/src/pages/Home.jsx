
import HeroBanner from '../components/HeroBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import { BottomBanner } from '../components/BottomBanner'

const Home = () => {
  return (
    <div className='mt-10'>
        <HeroBanner/>
        <Categories/>
        <BestSeller/>
        <BottomBanner/>
    </div>
  )
}

export default Home