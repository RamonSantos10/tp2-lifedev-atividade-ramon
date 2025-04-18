import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        {children}
      </div>
    </main>
  )
}

export default AuthLayout