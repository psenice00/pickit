import { Header } from './components/header';
import React, { lazy, useEffect } from 'react'
import { Footer } from './components/footer';
import Aos from 'aos';
import "aos/dist/aos.css"

import { Cookie } from './components/utils/cookie';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



const LandingPage = lazy(() => import('./components/landingPage'));
const OrderPage = lazy(() => import('./components/order/order'));

function App() {
  useEffect(() => {
    Aos.init(
      { duration: 1000 }
    );
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <LandingPage />
        {/* <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/objednat' element={<OrderPage />} />

        </Routes> */}
        <Footer />
        <Cookie />
      </BrowserRouter>
    </div>
  );
}

export default App;
