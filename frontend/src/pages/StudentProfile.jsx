import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons

export default function StudentProfile() {
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
              <button className="text-white text-lg hover:text-blue-600 transition">Siddhesh</button>
              <button className="text-white text-lg hover:text-blue-600 transition">About</button>
              <button className="text-white text-lg hover:text-blue-600 transition">Help</button>
              <button className="text-white text-lg hover:text-blue-600 transition">Contact</button>
            </div>
          </header>
    
          {/* Main Content */}
          <span className='text-2xl text-center font-semibold text-black bg-slate-400 p-3'>Siddhesh's Profile</span>
          <span className='text-lg text-center font-medium text-black bg-slate-400'>Welcome Siddhesh! Please keep your profile updated for better communication. Scroll down to see the current available postings to apply.</span>
          
          {/*Profile updated succesfully*/}
          <div class="bg-blue-100 border-t border-b border-green-700 text-green-700 px-4 py-3" role="alert">
            <p class="font-bold text-lg text-center">Profile updated succesfully</p>
            <p class="text-md text-center">Thank you for updating the details.</p>
          </div>

          {/* Cannot update the profile */}
          {/* <div class="bg-blue-100 border-t border-b border-red-700 text-red-700 px-4 py-3" role="alert">
            <p class="font-bold text-lg text-center">Profile update failed</p>
            <p class="text-md text-center">Incorrect UFID. Please update the correct UFID.</p>
          </div> */}

          {/* Cannot update the profile as exceeded 20hrs */}
          {/* <div class="bg-blue-100 border-t border-b border-red-700 text-red-700 px-4 py-3" role="alert">
            <p class="font-bold text-lg text-center">Profile update failed</p>
            <p class="text-md text-center">Being an international student, you are capped at 20hrs.</p>
          </div> */}

          {/* Cannot update the profile as exceeded 20hrs */}
          {/* <div class="bg-blue-100 border-t border-b border-red-700 text-red-700 px-4 py-3" role="alert">
            <p class="font-bold text-lg text-center">Profile update failed</p>
            <p class="text-md text-center">GPA has to be in range of 0-4.</p>
          </div> */}

          {/*Applied succesfully*/}
          {/* <div class="bg-blue-100 border-t border-b border-green-700 text-green-700 px-4 py-3" role="alert">
            <p class="font-bold text-lg text-center">Application sent succesfully</p>
            <p class="text-md text-center">Thank you for applying. An update will be delivered soon!</p>
          </div> */}

          <div className='flex-grow items-center justify-center bg-zinc-200'>
            <div className='flex flex-col items-center mt-4'>
                <form className='flex flex-grow flex-col w-1/3 text-xl font-semibold p-3'>
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/007/469/004/small_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg" 
                  alt="student image" srcset="" className='h-40 w-40 rounded-full ml-72' />
                  <div className="mb-1">
                  <label className="block text-black font-semibold mb-2">Semester joined:</label>
                  <select
                    name="category"
                    id="category"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    required
                  >
              <option disabled value="">Select...</option>
              <option value="Fiction">Fall 2023</option>
              <option value="Non-fiction">Spring 2023</option>
              <option value="Sci-fi">Summer 2023</option>
            </select>
            </div>
            <div className='mb-1 flex flex-col mt-1'>
            <label>Enter CGPA</label>
            <input type="number" className='p-2'/>
            </div>
            <div className='mb-1 flex flex-col mt-1'>
            <label>Enter UFID</label>
            <input type="text" className='p-2' placeholder='Enter without hyphen'/>
            </div>
            <div className="mb-1">
                  <label className="block text-black font-semibold mb-2">Are you an international student:</label>
                  <select
                    name="category"
                    id="category"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    required
                  >
              <option disabled value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className='mb-1 flex flex-col mt-1'>
            <label>Desired number of working hours</label>
            <input type="number" className='p-2' placeholder='For internationals maximum limit is 20hours per week'/>
          </div>
          <div className='mb-1 flex flex-col mt-1'>
            <label>Upload resume</label>
            <input type="file" className='p-2'/>
          </div>

            <div className='flex flex-col mt-3'>
              {/* <button className='bg-gray-500 rounded-lg p-2'>Update</button> */}
              <button className='bg-gray-500 rounded-lg p-2'>Cancel Update</button>
            </div>
                </form>
            </div>
          </div>
          
          <span className='text-2xl text-center font-semibold text-white bg-black p-3'>Apply for the availble courses: </span>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-slate-400">
              <thead className="bg-slate-400 font-semibold text-xl">
                <tr>
                  <th className='border border-slate-300 p-2'>Course Name</th>
                  <th className="border border-slate-300 p-2">Course Taken</th>
                  <th className="border border-slate-300 p-2">Grade Achieved</th>
                  <th className="border border-slate-300 p-2">Willing to do TA?</th>
                  <th className="border border-slate-300 p-2">Preference Level</th>
                  <th className="border border-slate-300 p-2">Comments</th>
                  <th className='border border-slate-300 p-2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* Course Selection */}
                  <td className='text-center'> 
                    Course A
                  </td>
                  <td className="border border-slate-300 p-2">
                    <select
                      name="course"
                      id="course"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                      required
                    >
                      <option value="">Select..</option>
                      <option value="A">Yes</option>
                      <option value="B">No</option>
                    </select>
                  </td>

                  {/* Grade Input */}
                  <td className="border border-slate-300 p-2">
                    <input
                      type="number"
                      placeholder="Enter grade"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    />
                  </td>

                  {/* Willingness to be TA */}
                  <td className="border border-slate-300 p-2">
                    <select
                      name="willingness"
                      id="willingness"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>

                  {/* Preference Level Buttons */}
                  <td className="border border-slate-300 p-2">
                    <div className="flex items-center justify-center space-x-2">
                      <button type="button" className="text-red-500">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          ></path>
                        </svg>
                      </button>

                      <button type="button" className="text-red-500">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          ></path>
                        </svg>
                      </button>

                      <button type="button" className="text-red-500">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          ></path>
                        </svg>
                      </button>

                      <button type="button" className="text-red-500">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          ></path>
                        </svg>
                      </button>

                      <button type="button" className="text-gray-300 hover:text-red-500">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>

                  {/* Comments Input */}
                  <td className="border border-slate-300 p-2">
                    <input
                      type="text"
                      placeholder="Comments"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    />
                  </td>

                  <td className='flex justify-center gap-4'>
                    <button className='bg-green-500 p-3 rounded-lg'>
                      Applied
                    </button>
                    <button className='bg-red-400 p-3 rounded-lg'>
                      Revoke
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  {/* Course Selection */}
                  <td className='text-center'> 
                    Course A
                  </td>
                  <td className="border border-slate-300 p-2">
                    <select
                      name="course"
                      id="course"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                      required
                    >
                      <option value="">Select..</option>
                      <option value="A">Yes</option>
                      <option value="B">No</option>
                    </select>
                  </td>

                  {/* Grade Input */}
                  <td className="border border-slate-300 p-2">
                    <input
                      type="number"
                      placeholder="Enter grade"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    />
                  </td>

                  {/* Willingness to be TA */}
                  <td className="border border-slate-300 p-2">
                    <select
                      name="willingness"
                      id="willingness"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>

                  {/* Preference Level Buttons */}
                  <td className="border border-slate-300 p-2">
                    <div className="flex items-center justify-center space-x-2">
                      <button type="button" className="text-red-500">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          ></path>
                        </svg>
                      </button>

                      <button type="button" className="text-red-500">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          ></path>
                        </svg>
                      </button>

                      <button type="button" className="text-red-500">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          ></path>
                        </svg>
                      </button>

                      <button type="button" className="text-red-500">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          ></path>
                        </svg>
                      </button>

                      <button type="button" className="text-gray-300 hover:text-red-500">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>

                  {/* Comments Input */}
                  <td className="border border-slate-300 p-2">
                    <input
                      type="text"
                      placeholder="Comments"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    />
                  </td>

                  <td className='flex flex-row justify-center'>
                    <button className='bg-slate-400 p-3 rounded-lg'>
                      Apply
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Footer */}
          <footer className="w-full bg-black text-white py-3 text-center">
            <p>© 2024 University of Florida. All rights reserved.</p>
          </footer>
        </div>
      );
}
