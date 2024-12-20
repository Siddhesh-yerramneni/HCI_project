import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import { Alert } from './Alert';

export default function AdminP() {

  const [isEnabled,setIsEnabled] = useState(true)
  const [isAccepted,setIsAccepted] = useState(false);
  const [isVisible,setIsVisible] = useState(false);
  const [x1,setx1] = useState(false);
  const[x2,setx2] = useState(false);
  const[isProfile,setIsProfile] = useState(false);

  function handleToggle(x){
    console.log(x)
    if (x === 1){
      console.log("OCH")
      setx1(!x1);
      setIsEnabled(true);
      setIsVisible(true);
      setIsAccepted(true);
    }
    else if(x === 2){
      setx2(!x2);
      setIsEnabled(true);
      setIsVisible(true);
      setIsAccepted(true);
    }

    
    
  }

  function handleProfile(event){
    event.preventDefault();
    setIsVisible(true);
    setIsProfile(true);
  }

    return (
        <div className="min-h-screen flex flex-col relative bg-gray-50">
            {/* Left Arrow */}
            <Link to="/previous-page" className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition">
                <FaArrowLeft size={30} />
            </Link>

            {/* Right Arrow */}
            <Link to="/next-page" className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition">
                <FaArrowRight size={30} />
            </Link>

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

            {/* Profile Info */}
            <section className="p-6 mx-auto mt-4 w-full max-w-7xl bg-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center font-semibold text-gray-800">Admin's Profile</h2>
                <p className="text-center text-black mt-2">Please keep your profile updated for smooth handling of the application processings for the positions and communication.</p>
                <p className="text-center text-black mb-2">See the applications below to send/revoke offer letters.</p>

                <div className="flex flex-col items-center">
                    <form className="w-full space-y-4">
                        <div className="flex justify-center">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/007/469/004/small_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg"
                                alt="Student" className="h-32 w-32 rounded-full shadow-lg" />
                        </div>
                        {/* Dashboard */}
                        <div className='flex flex-row gap-6 justify-evenly'>
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 size-2/12">
                                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                                    <p className="mt-1 text-md text-white dark:text-white">
                                    Available positions
                                    </p>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-3xl text-center font-bold text-gray-800 dark:text-white">
                                    10
                                    </h3>
                                    <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                    10 positions are yet to be filled.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 size-2/12">
                                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                                    <p className="mt-1 text-md text-white dark:text-white">
                                    Pending
                                    </p>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-3xl text-center font-bold text-gray-800 dark:text-white">
                                    10
                                    </h3>
                                    <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                    10 pending application waiting for offer.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 size-2/12">
                                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                                    <p className="mt-1 text-md text-white dark:text-white">
                                    Offers sent
                                    </p>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-3xl text-center font-bold text-gray-800 dark:text-white">
                                    4
                                    </h3>
                                    <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                    You have sent 4 offer letters.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 size-2/12">
                                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                                    <p className="mt-1 text-md text-white dark:text-white">
                                    Positions filled 
                                    </p>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-3xl text-center font-bold text-gray-800 dark:text-white">
                                    50
                                    </h3>
                                    <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                    You have filled 50 TA positions.
                                    </p>
                                </div>
                            </div>
                            </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-gray-700">Office location:</label>
                                <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-gray-700">E-mail:</label>
                                <input type="email" required className="w-full px-4 py-2 border rounded-lg focus:border-blue-500" />
                            </div>
                        </div>
                        <button type="submit" onClick={handleProfile} className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">Update Profile</button>
                    </form>
                </div>
            </section>

            {/* Course Application Table */}
            <section className="mx-auto my-8 max-w-7xl p-6 bg-gray-300 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-black mb-4 text-center ">Manage the applications</h3>
                <div className='flex-grow items-center justify-center mb-4'>
                <div className='flex flex-row gap-6 justify-center'>
                  <select
                        defaultValue={"DEFAULT"}
                        id="countries"
                        className="block w-1/5 rounded-lg border border-black-300 bg-black p-2.5 text-lg text-black focus:border-blue-500 focus:ring-blue-500 dark:border-black dark:bg-black dark:text-white dark:placeholder-black-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
                      {/*Second dropdown*/}
                      <select
                        defaultValue={"DEFAULT"}
                        id="countries"
                        className="block w-1/5 rounded-lg border border-black  bg-black p-2.5 text-lg text-black  focus:border-blue-500 focus:ring-blue-500 dark:border-black  dark:bg-black  dark:text-white dark:placeholder-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      >
                        <option value="DEFAULT" disabled>
                          Choose a professor
                        </option>
                        <option value="AD">Dr. A</option>
                        <option value="BS">Dr. B</option>
                        <option value="FR">Dr. C</option>
                        <option value="DE">Dr. D</option>
                      </select>
                  </div>
                  </div>
                  <div className="grid  grid-cols-8 grid-rows-1 gap-2 justify-start p-5 -mt-16 pt-16">
            <div className="col-start-1 col-span-4 px-3 mt-6">
              <div className="max-w overflow-hidden rounded shadow-lg">
                <div className="w-full">
                  <form className="flex items-center">
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-white dark:text-white text-xl"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        className="text-l bg-black border border-black rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-black dark:border-black dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 text-white"
                        placeholder="Search for Students"
                        required=""
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-start-6 col-span-1 ml-5">
              <div className="max-w-sm overflow-hidden rounded shadow-lg mt-6">
                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black bg-black p-2.5 text-l text-black focus:border-blue-500 focus:ring-blue-500 dark:border-black dark:bg-black dark:text-white dark:placeholder-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="DEFAULT" disabled>
                    Hours
                  </option>
                  <option value="AD">20+</option>
                  <option value="BS">15-20</option>
                  <option value="FR">10-15</option>
                  <option value="DE">5-10</option>
                </select>
              </div>
            </div>

            <div className="col-start-7 col-span-1 ml-5">
              <div className="max-w-sm overflow-hidden rounded shadow-lg mt-6">
                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black  bg-black p-2.5 text-l text-black  focus:border-blue-500 focus:ring-blue-500 dark:border-black  dark:bg-black  dark:text-white dark:placeholder-white  dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="DEFAULT" disabled>
                  Grade
                  </option>
                  <option value="AD">3.70 - 4.0</option>
                  <option value="BS">3.30 - 3.69</option>
                  <option value="FR">3.0 - 3.29</option>
                  <option value="DE">1.0 - 2.99</option>
                </select>
              </div>
            </div>

            <div className="col-start-8 col-span-1 ml-5">
              <div className="max-w-md overflow-hidden rounded shadow-lg mt-6">
                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black  bg-black p-2.5 text-l text-black  focus:border-blue-500 focus:ring-blue-500 dark:border-black  dark:bg-black  dark:text-white dark:placeholder-white  dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="DEFAULT" disabled>
                  Program
                  </option>

                  <option value="BS">Masters</option>
                  <option value="FR">Phd</option>
                </select>
              </div>
            </div>
            <div className="col-start-9 col-span-1 ml-5">
              <div className="max-w-sm overflow-hidden rounded shadow-lg mt-6">
                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black  bg-black p-2.5 text-l text-black  focus:border-blue-500 focus:ring-blue-500 dark:border-black  dark:bg-black  dark:text-white dark:placeholder-white  dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="DEFAULT" disabled>
                  Sort by
                  </option>

                  <option value="BS">Hours</option>
                  <option value="FR">Grade</option>
                  <option value="FR">Student preference</option>
                </select>
              </div>
            </div>
          </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full border rounded-lg">
                        <thead className="bg-black text-lg font-semibold text-white">
                            <tr>
                                <th className="border p-2"> Student Name</th>
                                <th className="border p-2">Program</th>
                                <th className="border p-2">Grade</th>
                                <th className="border p-2">Hours per week</th>
                                <th className="border p-2">Student preference</th>
                                <th className="border p-2">Professor decision</th>
                                <th className="border p-2">Student decision</th>
                                <th className="border p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center text-black">
                                <td className="border p-2">Student A</td>
                                <td className="border p-2">Masters</td>
                                <td className="border p-2">A</td>
                                <td className="border p-2">30</td>
                                <td className="border p-2">5</td>
                                <td className='border p-2'>
                                    <button
                                      type="button"
                                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 content-center ml-10"
                                    >
                                      Accepted
                                    </button>
                                </td>
                                <td className='border p-2'>
                                    <button
                                      type="button"
                                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 content-center ml-10"
                                    >
                                      Accepted
                                    </button>
                                </td>
                                <td className='border p-2 flex flex-row'>
                                {isEnabled && x1? (
                                          <div className="flex gap-2">
                                          <span className="px-4 py-2 bg-green-200 text-white rounded-md">
                                              Accepted
                                          </span>
                                          <button
                                              onClick={() => handleToggle(1) }
                                              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                          >
                                              Revoke
                                          </button>
                                          </div>
                                      ) : (
                                          <button
                                          onClick={() => handleToggle(1)  }
                                          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                                          >
                                          Accept
                                          </button>
                                      )}
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="text-center text-black">
                                <td className="border p-2">Student A</td>
                                <td className="border p-2">Masters</td>
                                <td className="border p-2">A</td>
                                <td className="border p-2">30</td>
                                <td className="border p-2">5</td>
                                <td className='border p-2'>
                                    <button
                                      type="button"
                                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 content-center ml-10"
                                    >
                                      Accepted
                                    </button>
                                </td>
                                <td className='border p-2'>
                                    <button
                                      type="button"
                                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 content-center ml-10"
                                    >
                                      Accepted
                                    </button>
                                </td>
                                <td className='border p-2 flex flex-row justify-center'>
                                  { (isEnabled && x2)? (
                                          <div className="flex gap-2">
                                          <span className="px-4 py-2 bg-green-200 text-white rounded-md">
                                              Accepted
                                          </span>
                                          <button
                                              onClick={() => handleToggle(2) }
                                              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                          >
                                              Revoke
                                          </button>
                                          </div>
                                      ) : (
                                          <button
                                          onClick={() => handleToggle(2)  }
                                          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                                          >
                                          Accept
                                          </button>
                                      )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <Alert onClose={() => setIsVisible(false)} visible={isVisible} profile={isProfile} application={false} acceptance={false}></Alert>

            {/* Footer */}
            <footer className="w-full bg-black text-white py-4 text-center">
                <p>© 2024 University of Florida. All rights reserved.</p>
            </footer>
        </div>
    );
}