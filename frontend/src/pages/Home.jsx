import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 w-full bg-black py-3 shadow-md flex justify-between items-center px-8 z-10">
                <div className="flex items-center">
                    <Link to='/'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7DjAZZLWBGma-Vm01k1yr2ErdOngnGFEJg&s"
                            alt="University Logo" className="h-12 w-12 mr-4 rounded-full" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-white">TA Assignment System</h1>
                        <p className="text-sm text-gray-300">University of Florida</p>
                    </div>
                </div>
                <nav className="flex space-x-4">
                    <Link to="/" className="text-white hover:text-blue-500 transition">About</Link>
                    <Link to="/" className="text-white hover:text-blue-500 transition">Help</Link>
                    <Link to="/" className="text-white hover:text-blue-500 transition">Contact</Link>
                    <Link to="/" className="text-white hover:text-blue-500 transition">Logout</Link>
                </nav>
            </header>

      {/* Main Content */}
      <main className="flex flex-col flex-grow items-center mt-10 sm:mt-20 text-center px-4">
        <section className="mb-8 max-w-3xl">
        <p className="text-black text-4xl text font-semibold mt-8 mb-4 text-nowrap">
         Welcome to TAAS - TA Assignment system
          </p>
          <p className="text-black text-lg sm:text-xl font-semibold mt-8 mb-4">
          Streamlining the process of applying, reviewing, and managing Teaching Assistant positions at the University of Florida. Whether you're a student seeking TA opportunities or a professor looking to assign TAs to your courses, TAAS provides a simple and efficient platform to manage your applications and decisions.
          </p>
          <p className="text-black text-lg sm:text-xl font-semibold">
          Please log in to view your applications, track your status, and explore available TA positions. We're committed to making the TA assignment process smoother for everyone involved. 
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16 w-full max-w-5xl">
          <Link to='/sl' className="bg-black p-4 sm:p-6  shadow-md text-center w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">I'm a student</h3>
            <p className="text-white text-sm sm:text-base">
              Apply easily, track your applications, and get timely feedback on your status.
            </p>
          </Link>
          <Link to='/pl' className="bg-black p-4 sm:p-6 rounded-lg shadow-md text-center w-full h-auto relative z-0 transition-all duration-300 hover:scale-110">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">I'm a professor</h3>
            <p className="text-white text-sm sm:text-base">
              Review applications, filter candidates, and rank potential TAs.
            </p>
          </Link>
          <Link to='/al' className="bg-black p-4 sm:p-6 rounded-lg shadow-md text-center w-full h-auto relative z-0 transition-all duration-300 hover:scale-110">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">I'm an admin</h3>
            <p className="text-white text-sm sm:text-base">
              Manage courses, view preferences, and assign TAs easily.
            </p>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-3 text-center text-sm sm:text-base">
        <p>© 2024 University of Florida. All rights reserved.</p>
      </footer>
    </div>
  );
}
