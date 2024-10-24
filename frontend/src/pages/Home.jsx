import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-black py-3 shadow-md flex justify-between items-center px-4 sm:px-8">
        <div className="flex items-center">
          <Link to='/'>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7DjAZZLWBGma-Vm01k1yr2ErdOngnGFEJg&s"
              alt="University Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 mr-2 sm:mr-4"
            />
          </Link>
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-white">
              TA Assignment System (TAAS)
            </h1>
            <p className="text-sm sm:text-md text-white">University of Florida</p>
          </div>
        </div>
        <div className="flex space-x-4 sm:space-x-6">
          <button className="text-white text-sm sm:text-lg hover:text-blue-600 transition">
            About
          </button>
          <button className="text-white text-sm sm:text-lg hover:text-blue-600 transition">
            Help
          </button>
          <button className="text-white text-sm sm:text-lg hover:text-blue-600 transition">
            Contact
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col flex-grow items-center mt-10 sm:mt-20 text-center px-4">
        <section className="mb-8 max-w-3xl">
          <p className="text-black text-lg sm:text-xl font-semibold mt-8 mb-4">
            This platform streamlines the TA application process, providing feedback at every step and enhancing communication between students, professors, and administrators.
          </p>
          <p className="text-black text-lg sm:text-xl font-semibold">
            Choose your role and continue as per following! 
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16 w-full max-w-5xl">
          <Link to='/sl' className="bg-black p-4 sm:p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">I'm a student</h3>
            <p className="text-white text-sm sm:text-base">
              Apply easily, track your applications, and get timely feedback on your status.
            </p>
          </Link>
          <Link to='/pl' className="bg-black p-4 sm:p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">I'm a professor</h3>
            <p className="text-white text-sm sm:text-base">
              Review applications, filter candidates, and rank potential TAs.
            </p>
          </Link>
          <Link to='/al' className="bg-black p-4 sm:p-6 rounded-lg shadow-md text-center">
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
