import { useState } from 'react'


import '../App.css'
import Header from '../components/header'
import Footer from '../components/footer'
import HomeItem from '../components/homeitem'
import { Outlet } from 'react-router-dom'
import FetchStatus from '../components/fetchstatus'
import Loading from '../components/loadingspinner'
import { useSelector } from 'react-redux'


function App() {
  
 const fetching = useSelector((store)=> store.fetchStatus.currentlyFetching)
 console.log(fetching);
  return (
    <>
      
   <Header/>
   {fetching? <Loading/> : <Outlet/>}
   
   <FetchStatus/>
   
   <Footer/>
    
    </>
  )
}

export default App
