import React from 'react'
import { Link } from 'react-router-dom';
export default function StudentLogin() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-black py-3 shadow-md flex justify-between items-center px-8">
        <div className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7DjAZZLWBGma-Vm01k1yr2ErdOngnGFEJg&s"
           alt="University Logo" className="h-12 w-12 mr-4" />
          <div>
            <h1 className="text-2xl font-bold text-white">TA Assignment System (TAAS)</h1>
            <p className="text-md text-white">University of Florida</p>
          </div>
        </div>
        <div className="flex space-x-6">
          <button className="text-white text-lg hover:text-blue-600 transition">About</button>
          <button className="text-white text-lg hover:text-blue-600 transition">Help</button>
          <button className="text-white text-lg hover:text-blue-600 transition">Contact</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col flex-grow items-center text-center">
        <div className='flex flex-col items-center'>
            <div className='flex flex-row gap-4 mt-2 text-xl'>
                <label className='text-xl font-semibold rounded p-3'>E-mail : </label>
                <input className='border border-black rounded p-3' placeholder='Enter your email' type="email" />
            </div>
            <div className='flex flex-row gap-4 mt-2 text-xl'>
                <label className='text-xl font-semibold rounded p-3'>Password : </label>
                <input className='border border-black rounded p-3' placeholder='Enter your password ' type="email" />
            </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-3 text-center">
        <p>© 2024 University of Florida. All rights reserved.</p>
      </footer>
    </div>
  );
}
