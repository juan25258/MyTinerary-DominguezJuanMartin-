import React from 'react'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

export default function Layout({children}) {
  return (
        <>
          <Header />
          {children}
          <Footer />
        </>
          
  )
}
