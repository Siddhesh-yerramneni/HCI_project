import React from "react";
import { Link } from "react-router-dom";

export default function AdminProfile() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-black py-3 shadow-md flex justify-between items-center px-4 sm:px-8">
        <div className="flex items-center">
          <Link to="/">
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
            <p className="text-sm sm:text-md text-white">
              University of Florida
            </p>
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
          <button className="text-white text-lg hover:text-blue-600 transition">Logout</button>
        </div>
      </header>

      <span className="text-2xl text-center font-semibold text-black bg-slate-400 p-3">
        Admin's Dashboard
      </span>

      <div class="bg-blue-100 border-t border-b border-green-700 text-green-700 px-4 py-3" role="alert">
            <p class="font-bold text-lg text-center">Offer Sent Successfully</p>
            
      </div>

      {/*
      
        <div class="bg-blue-100 border-t border-b border-green-700 text-green-700 px-4 py-3" role="alert">
            <p class="font-bold text-lg text-center">Offerletter Sent Succesfully</p>
            
      </div>
      
      
      */}


      <div className="flex-grow items-center justify-center bg-zinc-200">
        <div className="flex flex-col items-center mt-4">
          <form className="flex flex-grow flex-col w-1/3 text-xl font-semibold p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2206/2206368.png"
              alt="student image"
              srcSet=""
              className="h-40 w-40 rounded-lg ml-40"
            />
          </form>
        </div>
      </div>

      <section>
        <div className="container mx-auto">
          <div className="grid  grid-cols-6 grid-rows-2 gap-2 justify-start">
            <div className="col-start-2 col-span-2 ml-20">
              <div className="max-w-sm overflow-hidden rounded shadow-lg">
                <label
                  htmlFor="countries"
                  className="mb-2 block text-lg font-medium text-gray-900 dark:text-black text-center"
                >
                  Choose a Course
                </label>
                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black-300 bg-black p-2.5 text-sm text-black focus:border-blue-500 focus:ring-blue-500 dark:border-black dark:bg-black dark:text-white dark:placeholder-black-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="DEFAULT" disabled>
                    Choose a Course
                  </option>
                  <option value="5201">
                    CIS5201: Distributed Operating Systems
                  </option>
                  <option value="5001">CIS5001: Embedded Systems</option>
                  <option value="5510">
                    CAP5510: Human Computer Interaction
                  </option>
                </select>
              </div>
            </div>

            <div className="col-start-4 col-span-2 ml-5">
              <div className="max-w-sm overflow-hidden rounded shadow-lg">
                <label
                  htmlFor="countries"
                  className="mb-2 block text-lg font-medium text-black-900 dark:text-black text-center"
                >
                  Choose a professor
                </label>
                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black  bg-black p-2.5 text-sm text-black  focus:border-blue-500 focus:ring-blue-500 dark:border-black  dark:bg-black  dark:text-white dark:placeholder-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="DEFAULT" disabled>
                    Choose a professor
                  </option>
                  <option value="AD">Anil Dorba</option>
                  <option value="BS">Ethan Turner</option>
                  <option value="FR">Christian Brocher</option>
                  <option value="DE">Sanja Gomex</option>
                </select>
              </div>
            </div>

            <div className="col-start-1 col-span-7">
              <h1 className="h-14 w-full text-2xl text-center font-semibold text-white bg-black pt-3">
                Managing Student Applications
              </h1>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------ */}

          <div className="grid  grid-cols-8 grid-rows-1 gap-2 justify-start p-5 -mt-16 pt-16">
            <div className="col-start-1 col-span-4 px-3 mt-8">
              <div className="max-w overflow-hidden rounded shadow-lg">
                <div className="w-full">
                  <form className="flex items-center">
                    <label for="simple-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-white dark:text-white"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-black border border-black text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-black dark:border-black dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 text-white"
                        placeholder="Search for Students"
                        required=""
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-start-6 col-span-1 ml-5">
              <div className="max-w-sm overflow-hidden rounded shadow-lg">
                <label
                  htmlFor="countries"
                  className="mb-2 block text-md font-medium text-gray-900 dark:text-black text-center"
                >
                  Hours
                </label>

                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black bg-black p-2.5 text-sm text-black focus:border-blue-500 focus:ring-blue-500 dark:border-black dark:bg-black dark:text-white dark:placeholder-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="DEFAULT" disabled>
                    Select an option
                  </option>
                  <option value="AD">20+</option>
                  <option value="BS">15-20</option>
                  <option value="FR">10-15</option>
                  <option value="DE">5-10</option>
                </select>
              </div>
            </div>

            <div className="col-start-7 col-span-1 ml-5">
              <div className="max-w-sm overflow-hidden rounded shadow-lg">
                <label
                  htmlFor="countries"
                  className="mb-2 block text-md font-medium text-gray-900 dark:text-black text-center"
                >
                  Grade
                </label>

                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black  bg-black p-2.5 text-sm text-black  focus:border-blue-500 focus:ring-blue-500 dark:border-black  dark:bg-black  dark:text-white dark:placeholder-white  dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="DEFAULT" disabled>
                    Select an option
                  </option>
                  <option value="AD">3.70 - 4.0</option>
                  <option value="BS">3.30 - 3.69</option>
                  <option value="FR">3.0 - 3.29</option>
                  <option value="DE">1.0 - 2.99</option>
                </select>
              </div>
            </div>

            <div className="col-start-8 col-span-1 ml-5">
              <div className="max-w-sm overflow-hidden rounded shadow-lg">
                <label
                  htmlFor="countries"
                  className="mb-2 block text-md font-medium text-gray-900 dark:text-black text-center"
                >
                  Education
                </label>

                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black  bg-black p-2.5 text-sm text-black  focus:border-blue-500 focus:ring-blue-500 dark:border-black  dark:bg-black  dark:text-white dark:placeholder-white  dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="DEFAULT" disabled>
                    Select an option
                  </option>

                  <option value="BS">Masters</option>
                  <option value="FR">Phd</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-slate-400">
              <thead className="bg-slate-400 font-semibold text-xl">
                <tr>
                  <th className="border border-slate-300 p-2">Student Name</th>
                  <th className="border border-slate-300 p-2">Department</th>
                  <th className="border border-slate-300 p-2">
                    GPA (Out of 4.0)
                  </th>
                  <th className="border border-slate-300 p-2">
                    International Student?
                  </th>
                  <th className="border border-slate-300 p-2">
                    Working Hours (Per Week)
                  </th>
                  <th className="border border-slate-300 p-2">
                    Current Level of Education
                  </th>
                  <th className="border border-slate-300 p-2">
                    Professor Decision
                  </th>

                  <th className="border border-slate-300 p-2">
                    Student Decision
                  </th>
                  <th className="border border-slate-300 p-2">
                    Admin's Decision
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  {/* Course Selection */}
                  <td className="text-center border border-slate-500 p-2">
                    Sidedish Yermaneni
                  </td>
                  <td className="border border-slate-500 p-2">Masters</td>
                  {/* Grade Input */}
                  <td className="border border-slate-500 p-2">3.96</td>
                  {/* Internation Student*/}
                  <td className="border border-slate-500 p-2">Yes</td>

                  {/* Working Hours*/}
                  <td className="border border-slate-500 p-2">20</td>

                  {/* Preference Level Buttons */}
                  <td className="border border-slate-500">Masters</td>

                  {/* Actions */}

                  <td className="border border-slate-500">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 content-center ml-10"
                    >
                      Accepted
                    </button>
                  </td>

                  {/* Actions */}

                  <td className="border border-slate-500 p-2">
                    <button
                        type="button"
                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 content-center ml-10"
                      >
                        Accepted
                      </button>
                  </td>

                  <td className="border border-slate-500 p-2">
                    <div class="inline-flex rounded-md shadow-sm" role="group">
                      <button
                        type="button"
                        class=" ml-8 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 content-center"
                      >
                        Send Offer
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody className="text-center" >
                <tr>
                  {/* Course Selection */}
                  <td className="text-center border border-slate-500 p-2">
                    Indu Pots
                  </td>
                  <td className="border border-slate-500 p-2">Masters</td>
                  {/* Grade Input */}
                  <td className="border border-slate-500 p-2">3.94</td>
                  {/* Internation Student*/}
                  <td className="border border-slate-500 p-2">Yes</td>

                  {/* Working Hours*/}
                  <td className="border border-slate-500 p-2">20</td>

                  {/* Preference Level Buttons */}
                  <td className="border border-slate-500">Masters</td>

                  {/* Actions */}

                  <td className="border border-slate-500">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 content-center ml-10"
                    >
                      Accepted
                    </button>
                  </td>

                  {/* Actions */}

                  <td className="border border-slate-500 p-2">
                    <button
                        type="button"
                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 content-center ml-10"
                      >
                        Accepted
                      </button>
                  </td>

                  <td className="border border-slate-500 p-4">
                    <div className="inline-flex rounded-md shadow-sm" role="group">

                  

                      <button
                        type="button"
                        className=" ml-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-green-800 content-center"
                      >
                        Revoke
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody className="text-center">
                <tr>
                  {/* Course Selection */}
                  <td className="text-center border border-slate-500 p-2">
                    Mohammad Samba
                  </td>
                  <td className="border border-slate-500 p-2">Masters</td>
                  {/* Grade Input */}
                  <td className="border border-slate-500 p-2">3.81</td>
                  {/* Internation Student*/}
                  <td className="border border-slate-500 p-2">Yes</td>

                  {/* Working Hours*/}
                  <td className="border border-slate-500 p-2">25</td>

                  {/* Preference Level Buttons */}
                  <td className="border border-slate-500">Masters</td>

                  {/* Actions */}

                  <td className="border border-slate-500">
                  <button
                      type="button"
                      className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 ml-8"
                    >
                      Pending
                    </button>
                    <a className="flex justify-center text-blue-600" href="">
                      Send Notification
                    </a>
                  </td>

                  {/* Actions */}

                  <td className="border border-slate-500 p-2">
                    <button
                      type="button"
                      className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 ml-8"
                    >
                      Pending
                    </button>
                    <a className="flex justify-center text-blue-600" href="">
                      Send Notification
                    </a>
                  </td>

                  <td className="border border-slate-500 p-2">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                      <button
                        type="button"
                        className="ml-5 mb-6 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-green-800 content-center"
                      >
                        Revoke
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-row justify-center">
            <button className="text-center font-semibold p-1 bg-gray-400 w-full rounded shadow">
              Add one more posting
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-black text-white py-3 text-center">
            <p>© 2024 University of Florida. All rights reserved.</p>
      </footer>
    </div>
  );
}
