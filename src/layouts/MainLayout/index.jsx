import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 py-8 flex-grow">
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout