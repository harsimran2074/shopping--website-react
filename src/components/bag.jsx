import React from 'react'
import Header from './header'
import Footer from './footer'

const Bag = () => {
  return (
    <>
    <Header/>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
        </div>
        <div className="bag-summary">
        </div>

      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Bag