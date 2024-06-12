import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'


export default function Outlets() {
  return (
   <>
    {/* <Header/> */}
   <Outlet/>
   {/* <Footer/> */}
  
   </>
  )
}
