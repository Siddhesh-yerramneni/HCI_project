import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons
export default function ProfessorLogin() {
    return (
        <div className="min-h-screen flex flex-col relative">
          {/* Left Arrow */}
          <Link to="/previous-page" className="absolute left-24 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition">
            <FaArrowLeft size={40} />
          </Link>
    
          {/* Right Arrow */}
          <Link to="/next-page" className="absolute right-24 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition">
            <FaArrowRight size={40} />
          </Link>
    
          {/* Header */}
          <header className="w-full bg-black py-3 shadow-md flex justify-between items-center px-8">
            <div className="flex items-center">
                <Link to='/'>
          <         img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7DjAZZLWBGma-Vm01k1yr2ErdOngnGFEJg&s"
                    alt="University Logo" className="h-12 w-12 mr-4" />
                </Link>
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
          <div className='flex-grow items-center justify-center bg-zinc-200'>
            <main className="flex flex-col flex-grow items-center mt-24 text-center">
              <h2 className="text-2xl font-semibold mb-6">Logging in as Professor</h2>
              <div className='grid grid-rows-2 gap-6 w-1/3'>
                <div className='flex flex-row gap-2 items-center text-xl'>
                  <label className='text-xl font-semibold rounded p-3 w-1/3 '>E-mail</label>
                  <input className='border border-black rounded p-3 flex-grow' placeholder='Enter your email' type="email" />
                </div>
                <div className='flex flex-row gap-2 items-center text-xl'>
                  <label className='text-xl font-semibold rounded p-3 w-1/3 '>Password</label>
                  <input className='border border-black rounded p-3 flex-grow ' placeholder='Enter your password' type="password" />
                </div>
                <div className=''>
                  <button className="bg-black text-white py-4 px-6 rounded-full text-xl w-1/3">
                    Login
                  </button>
                </div>
                <div className="flex flex-row justify-between mt-2 text-red-600 text-lg w-full">
                  <Link to="/forgot-password" className="hover:underline">Forgot Password?</Link>
                  <Link to="/change-role" className="hover:underline">Change Role</Link>
                </div>
              </div>
            </main>
          </div>
    
          {/* Footer */}
          <footer className="w-full bg-black text-white py-3 text-center">
            <p>© 2024 University of Florida. All rights reserved.</p>
          </footer>
        </div>
      );
}
