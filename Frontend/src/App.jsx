import Navbar from './components/Navbar'
import { Routes , Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategories from './pages/ProductCategories'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import AddAddress from './pages/AddAddress'

const App = () => {
  const isSellerPath = useLocation().pathname.includes('seller')
  const {showUserLogin} = useAppContext();  

  return (
    <div>
      {isSellerPath ? null : <Navbar/>}
      {showUserLogin ? <Login/> : null}
      
      <Toaster/>
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24"}`}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<AllProducts/>} />
          <Route path='/products/:category' element={<ProductCategories/>} />
          <Route path='/products/:category/:id' element={<ProductDetails/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/add-address' element={<AddAddress/>} />
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </div>
  )
}

export default App