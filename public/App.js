import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home'
import Footer from './Footer';
import Headings from './Headings';
import Fashion from './Fashion';
import Electronics from './Electronics';
import Jewellery from './Jewellery';
import ProductItem from './ProductItem'
import Testimonial from './Testimonial';
import { Provider } from 'react-redux';
import store from './reducers/store';
import ECart from './ECart';
import Checkout from './Checkout';
import Login from './Login';
import Registration from './Registration';
function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Header />
 <Headings />
 <Routes>
  <Route path='/Registration' element={<Registration />} />
  <Route path='/Login' element={<Login />} />
  <Route path='/Checkout' element={<Checkout />} />
  <Route path='/' element={<Home />} />
  <Route path='/' element={<Testimonial />} />
  <Route path="/Fashion" element={<Fashion />} />
  <Route path="/Electronics" element={<Electronics />} />
  <Route path="/Jewellery" element={<Jewellery />} />
  <Route path='/ECart' element={<ECart />} />
  <Route path='/ProductItem' element={<ProductItem />} />
 </Routes>
 </BrowserRouter>
 <Footer />

    </div>
  );
}

export default App;
