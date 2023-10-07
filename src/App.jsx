import React from 'react'
import styles from './style.js'
import Navbar from './components/Navbar.jsx'
import Business from './components/Business.jsx'
import BIling from './components/BIling.jsx'
import Client from './components/Client.jsx'
import Testimonial from './components/Testimonial.jsx'
import CTA from './components/CTA.jsx'
import Stats from './components/States.jsx'
import Hero from './components/Hero.jsx'
import CardDeal from './components/CardDeal.jsx'
import Footer from './components/Footer.jsx'
// import {Navbar,Business,BIling,Client,Testimonial,CTA,States,Hero,CardDeal,Footer} from './components'

const App = () => {
    return(
    <div className="bg-primary w-full  overflow-hidden">
    <div className={`${styles.paddingX}  ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}    `}>
        <Navbar />
        
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <BIling />
        <CardDeal />
        <Testimonial />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default App
