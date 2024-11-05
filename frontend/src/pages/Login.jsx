import React from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {

function handleSubmit(event){
    event.preventDefault();
    console.log(event.target.email.value);
}




  return (


    <div className="opacity-100 min-h-screen flex flex-col">

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
            Give me a tour
          </button>
          <button className="text-white text-sm sm:text-lg hover:text-blue-600 transition">
            Contact support
          </button>
        </div>
      </header>

    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-20 ">
    <div className="md:mx-auto md:w-full md:max-w-md">
        {/* 
      <img
        
        src=""
        className="mx-auto h-10 w-auto"
      />
      */}
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Log in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              Password
            </label>
            <div className="text-sm">
                {/*
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
              */}
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Log in
          </button>
        </div>
      </form>
      {/* 
      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?{' '}
        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
          Start a 14 day free trial
        </a>
      </p>
      */}
    </div>
  </div>

  {/* ------------------------------------------------------------------------------------------------------------------ */}

 
  

    


  <footer className="w-full bg-black text-white py-3 text-center text-sm sm:text-base place-content-baseline" >
        <p>© 2024 University of Florida. All rights reserved.</p>
      </footer>

  </div>

  )
}
