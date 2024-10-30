import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons

export default function StudentApplicationManagement() {
    return (
        <div className="min-h-screen flex flex-col relative bg-zinc-200">
          {/* Left Arrow */}
          <Link to="/previous-page" className="absolute left-2 sm:left-10 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 sm:p-3 rounded-full hover:bg-gray-800 transition">
            <FaArrowLeft size={30} sm={40} />
          </Link>
    
          {/* Right Arrow */}
          <Link to="/next-page" className="absolute right-4 sm:right-10 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 sm:p-3 rounded-full hover:bg-gray-800 transition">
            <FaArrowRight size={30} sm={40} />
          </Link>
    
          {/* Header */}
          <header className="w-full bg-black py-3 shadow-md flex justify-between items-center px-4 sm:px-8">
            <div className="flex items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7DjAZZLWBGma-Vm01k1yr2ErdOngnGFEJg&s"
               alt="University Logo" className="h-10 w-10 sm:h-12 sm:w-12 mr-2 sm:mr-4" />
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-white">TA Assignment System (TAAS)</h1>
                <p className="text-sm sm:text-md text-white">University of Florida</p>
              </div>
            </div>
            <div className="flex space-x-4 sm:space-x-6">
            <button className="text-white text-sm sm:text-lg hover:text-blue-600 transition">Profile & Apply</button>
            <button className="text-white text-sm sm:text-lg hover:text-blue-600 transition">Home</button>
              <button className="text-white text-sm sm:text-lg hover:text-blue-600 transition">About</button>
              <button className="text-white text-sm sm:text-lg hover:text-blue-600 transition">Help</button>
              <button className="text-white text-sm sm:text-lg hover:text-blue-600 transition">Contact</button>
            </div>
          </header>
    
          {/* Main Content */}
          <div className="flex flex-col items-center  flex-grow mt-6 sm:mt-6 px-4">
              <h2 className="
              text-xl sm:text-2xl font-semibold text-center mb-6">Manage your application decisions</h2>
              {/* Checkbox and Sort Container */}
              <div className="flex justify-between w-full items-center mb-6">
                {/* Checkboxes */}
                <div className='flex flex-row gap-4'>
                  <input id="admin-checkbox" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-black"/>
                  <label htmlFor="admin-checkbox" className="ml-1 text-lg font-medium text-black">Accepted by admin</label>
                  
                  <input id="user-checkbox" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-black ml-6"/>
                  <label htmlFor="user-checkbox" className="ml-1 text-lg font-medium text-black">Accepted by you</label>

                  <input id="rejected-checkbox" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-black ml-6"/>
                  <label htmlFor="rejected-checkbox" className="ml-1 text-lg font-medium text-black">Rejected by you</label>
                </div>

                {/* Sort Dropdown */}
                <div>
                  <label htmlFor="sort-time" className="mr-2 text-lg font-medium text-black">Sort by:</label>
                  <select id="sort-time" className="p-2 border border-gray-300 rounded">
                    <option value="time">Recent</option>
                    <option value="course">Oldest</option>
                  </select>
                </div>
              </div>

              {/* Table for Applications */}
              <div className="w-full overflow-x-auto">
                <table className="min-w-full border-collapse border border-slate-400 bg-white rounded-lg shadow-md">
                  <thead className="bg-slate-300 font-semibold text-sm sm:text-xl">
                    <tr>
                      <th className="border border-slate-300 p-2 text-center">Course Name</th>
                      <th className="border border-slate-300 p-2 text-center">Message from Professor</th>
                      <th className="border border-slate-300 p-2 text-center">Status from Professor</th>
                      <th className="border border-slate-300 p-2 text-center">Your Decision</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    <tr className="text-sm sm:text-lg">
                      {/* Course Selection */}
                      <td className="border border-slate-300 p-2 text-center"> 
                        Course A
                      </td>
    
                      {/* Comments Input */}
                      <td className="border border-slate-300 p-2">
                        <input
                          type="text"
                          placeholder="Comments"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                        />
                      </td>
    
                      {/* Status from Admin */}
                      <td className="border border-slate-300 p-2 text-center">
                        <span className="bg-green-500 text-white py-1 px-3 rounded-lg">Accepted</span>
                      </td>
    
                      {/* Student Decision */}
                      <td className="border border-slate-300 p-2 text-center">
                        <div className="flex justify-center space-x-3">
                          <button className="bg-green-500 text-white py-2 px-4 rounded-lg" disabled>Accepted</button>
                          <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Reject</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr className="text-sm sm:text-lg">
                      {/* Course Selection */}
                      <td className="border border-slate-300 p-2 text-center"> 
                        Course A
                      </td>
    
                      {/* Comments Input */}
                      <td className="border border-slate-300 p-2">
                        <input
                          type="text"
                          placeholder="Comments"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                        />
                      </td>
    
                      {/* Status from Admin */}
                      <td className="border border-slate-300 p-2 text-center">
                        <span className="bg-red-500 text-white py-1 px-3 rounded-lg">Rejected</span>
                      </td>
    
                      {/* Student Decision */}
                      <td className="border border-slate-300 p-2 text-center">
                        <div className="flex justify-center space-x-3">
                          <button className=" text-black py-2 px-4 rounded-lg">Better luck next time</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr className="text-sm sm:text-lg">
                      {/* Course Selection */}
                      <td className="border border-slate-300 p-2 text-center"> 
                        Course A
                      </td>
    
                      {/* Comments Input */}
                      <td className="border border-slate-300 p-2">
                        <input
                          type="text"
                          placeholder="Comments"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                        />
                      </td>
    
                      {/* Status from Admin */}
                      <td className="border border-slate-300 p-2 text-center">
                        <span className="bg-green-500 text-white py-1 px-3 rounded-lg">Accepted</span>
                      </td>
    
                      {/* Student Decision */}
                      <td className="border border-slate-300 p-2 text-center">
                        <div className="flex justify-center space-x-3">
                          <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Accept</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr className="text-sm sm:text-lg">
                      {/* Course Selection */}
                      <td className="border border-slate-300 p-2 text-center"> 
                        Course A
                      </td>
    
                      {/* Comments Input */}
                      <td className="border border-slate-300 p-2">
                        <input
                          type="text"
                          placeholder="Comments"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                        />
                      </td>
    
                      {/* Status from Admin */}
                      <td className="border border-slate-300 p-2 text-center">
                        <span className="bg-green-500 text-white py-1 px-3 rounded-lg">Accepted</span>
                      </td>
    
                      {/* Student Decision */}
                      <td className="border border-slate-300 p-2 text-center">
                        <div className="flex justify-center space-x-3">
                          <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Accept</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr className="text-sm sm:text-lg">
                      {/* Course Selection */}
                      <td className="border border-slate-300 p-2 text-center"> 
                        Course A
                      </td>
    
                      {/* Comments Input */}
                      <td className="border border-slate-300 p-2">
                        <input
                          type="text"
                          placeholder="Comments"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                        />
                      </td>
    
                      {/* Status from Admin */}
                      <td className="border border-slate-300 p-2 text-center">
                        <span className="bg-red-500 text-white py-1 px-3 rounded-lg">Rejected</span>
                      </td>
    
                      {/* Student Decision */}
                      <td className="border border-slate-300 p-2 text-center">
                        <div className="flex justify-center space-x-3">
                          <button className="text-black py-2 px-4 rounded-lg">Better luck next time</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr className="text-sm sm:text-lg">
                      {/* Course Selection */}
                      <td className="border border-slate-300 p-2 text-center"> 
                        Course A
                      </td>
    
                      {/* Comments Input */}
                      <td className="border border-slate-300 p-2">
                        <input
                          type="text"
                          placeholder="Comments"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                        />
                      </td>
    
                      {/* Status from Admin */}
                      <td className="border border-slate-300 p-2 text-center">
                        <span className="bg-red-500 text-white py-1 px-3 rounded-lg">Rejected</span>
                      </td>
    
                      {/* Student Decision */}
                      <td className="border border-slate-300 p-2 text-center">
                        <div className="flex justify-center space-x-3">
                          <button className=" text-black py-2 px-4 rounded-lg">Better luck next time</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr className="text-sm sm:text-lg">
                      {/* Course Selection */}
                      <td className="border border-slate-300 p-2 text-center"> 
                        Course A
                      </td>
    
                      {/* Comments Input */}
                      <td className="border border-slate-300 p-2">
                        <input
                          type="text"
                          placeholder="Comments"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                        />
                      </td>
    
                      {/* Status from Admin */}
                      <td className="border border-slate-300 p-2 text-center">
                        <span className="bg-green-500 text-white py-1 px-3 rounded-lg">Accepted</span>
                      </td>
    
                      {/* Student Decision */}
                      <td className="border border-slate-300 p-2 text-center">
                        <div className="flex justify-center space-x-3">
                          <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Accept</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="text-sm sm:text-lg">
                      {/* Course Selection */}
                      <td className="border border-slate-300 p-2 text-center"> 
                        Course A
                      </td>
    
                      {/* Comments Input */}
                      <td className="border border-slate-300 p-2">
                        <input
                          type="text"
                          placeholder="Comments"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                        />
                      </td>
    
                      {/* Status from Admin */}
                      <td className="border border-slate-300 p-2 text-center">
                        <span className="bg-red-500 text-white py-1 px-3 rounded-lg">Rejected</span>
                      </td>
    
                      {/* Student Decision */}
                      <td className="border border-slate-300 p-2 text-center">
                        <div className="flex justify-center space-x-3">
                          <button className= "text-black py-2 px-4 rounded-lg">Better luck next time</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  
                </table>
              </div>
          </div>
    
          {/* Footer */}
          <footer className="w-full bg-black text-white py-3 text-center text-sm sm:text-base mt-6">
            <p>© 2024 University of Florida. All rights reserved.</p>
          </footer>
        </div>
      );
}