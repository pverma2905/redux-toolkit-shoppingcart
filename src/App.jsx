import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import ProductData from './ProductData'
import CartPage from './components/CartPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<ProductCard />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
