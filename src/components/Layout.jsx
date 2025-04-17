import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

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