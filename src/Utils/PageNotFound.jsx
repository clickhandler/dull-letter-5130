import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const PageNotFound = () => {
  return (
    <div>
       <Navbar/>
       <div id='Container'>
         <h1>THIS PAGE DOESN'T SEEM TO EXIST.</h1>
         <h3>It looks like the link pointing here was faulty. Maybe try searching?</h3>
       </div>
       <Footer/>
    </div>
  )
}

export default PageNotFound