import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Layout = ({ children }) => {
  return (
    <main>
        <Navbar />
        <div className="container">
            { children }
        </div>
        <Footer />
    </main>
  )
}

export default Layout