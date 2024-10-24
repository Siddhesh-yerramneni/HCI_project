import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons
export default function ProfessorProfile() {
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
          <span className='text-2xl text-center font-semibold text-black bg-slate-400 p-3'>Professor's Profile</span>
          <div className='flex-grow items-center justify-center bg-zinc-200'>
            <div className='flex flex-col items-center mt-4'>
                <form className='flex flex-grow flex-col w-1/3 text-xl font-semibold p-3'>
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/007/469/004/small_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg" 
                  alt="student image" srcset="" className='h-40 w-40 rounded-full ml-44' />
                  <div className='mb-1 flex flex-col mt-2'>
                    <label className='mb-2'>Enter office location</label>
                    <input type="text" className='p-2'/>
                  </div>
                  <div className='mb-1 flex flex-col mt-2'>
                    <label className='mb-2'>Enter E-mail</label>
                    <input type="email" className='p-2'/>
                  </div>
                </form>
            </div>
          </div>

          <span className='text-2xl text-center font-semibold text-white bg-black p-3'>Request for postings: </span>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-slate-400">
              <thead className="bg-slate-400 font-semibold text-xl">
                <tr>
                  <th className='border border-slate-300 p-2'>Enter course Name</th>
                  <th className="border border-slate-300 p-2">Number of people</th>
                  <th className="border border-slate-300 p-2">Number of hours available</th>
                  <th className="border border-slate-300 p-2">Willing to take Masters students?</th>
                  <th className="border border-slate-300 p-2">Willing to take Phd students?</th>
                  <th className="border border-slate-300 p-2">Comments</th>
                  <th className='border border-slate-300 p-2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* Course Selection */}
                  <td className='text-center'> 
                    <input type="text" placeholder='CAP5100'/>
                  </td>
                  <td className="border border-slate-500 p-2">
                  <input type="number" placeholder='4'/>
                  </td>
                  {/* Grade Input */}
                  <td className="border border-slate-500 p-2">
                  <input type="number" placeholder='60'/>
                  </td>

                  {/* Willingness to be TA */}
                  <td className="border border-slate-500 p-2">
                    <select
                      name="willingness"
                      id="willingness"
                      className="w-full px-4 py-2 borderrounded-lg"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>

                  {/* Preference Level Buttons */}
                  <td className="border border-slate-500 p-2">
                    <select
                      name="willingness"
                      id="willingness"
                      className="w-full px-4 py-2 rounded-lg"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>

                  {/* Comments Input */}
                  <td className="border border-slate-500 p-2">
                    <input
                      type="text"
                      placeholder="Comments"
                      className="w-full px-4 py-2 borderrounded-lg"
                    />
                  </td>

                  <td className='text-center'>
                    <button className='bg-gray-500 rounded p-3'>
                      Post
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  {/* Course Selection */}
                  <td className='text-center'> 
                    <input type="text" placeholder='CAP5100'/>
                  </td>
                  <td className="border border-slate-500 p-2">
                  <input type="number" placeholder='4'/>
                  </td>
                  {/* Grade Input */}
                  <td className="border border-slate-500 p-2">
                  <input type="number" placeholder='60'/>
                  </td>

                  {/* Willingness to be TA */}
                  <td className="border border-slate-500 p-2">
                    <select
                      name="willingness"
                      id="willingness"
                      className="w-full px-4 py-2 borderrounded-lg"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>

                  {/* Preference Level Buttons */}
                  <td className="border border-slate-500 p-2">
                    <select
                      name="willingness"
                      id="willingness"
                      className="w-full px-4 py-2 rounded-lg"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>

                  {/* Comments Input */}
                  <td className="border border-slate-500 p-2">
                    <input
                      type="text"
                      placeholder="Comments"
                      className="w-full px-4 py-2 borderrounded-lg"
                    />
                  </td>

                  <td className='text-center'>
                    <button className='bg-gray-500 rounded p-3'>
                      Post
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex flex-row justify-center'>
          <button className='text-center font-semibold p-1 bg-gray-400 w-full rounded shadow'>Add one more posting</button>
          </div>
          {/* Footer */}
          <footer className="w-full bg-black text-white py-3 text-center">
            <p>© 2024 University of Florida. All rights reserved.</p>
          </footer>
        </div>
      );
}
