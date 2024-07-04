import React from 'react';
import style from './style';
import {Billing, Business, CTA, CardDeal, Clients, Footer, Hero, Navbar, Stats, Testimonials} from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    {/* Navbar Component*/}
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    {/* Hero Component */}
    <div className={`bg-primary ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${style.flexStart} ${style.paddingX}`}>
      <div className={`${style.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials />
        <Clients />
        <CTA/>
        <Footer/>
      </div>
    </div>

  </div>
)

export default App