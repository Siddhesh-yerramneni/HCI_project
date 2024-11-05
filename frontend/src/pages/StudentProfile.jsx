import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function StudentProfile() {
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
                <h2 className="text-2xl text-center font-semibold text-gray-800">Siddhesh's Profile</h2>
                <p className="text-center text-black mt-2">Keep your profile updated for better chances in getting the position and communication. See available postings below.</p>
                <p className="text-center text-black mb-2">See available postings below.</p>

                <div className="flex flex-col items-center">
                    <form className="w-full space-y-4">
                        <div className="flex justify-center">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/007/469/004/small_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg"
                                alt="Student" className="h-32 w-32 rounded-full shadow-lg" />
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-gray-700">Semester Joined:</label>
                                <select className="w-full px-4 py-2 border rounded-lg focus:border-blue-500">
                                    <option>Select...</option>
                                    <option>Fall 2023</option>
                                    <option>Spring 2023</option>
                                    <option>Summer 2023</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700">Enter CGPA:</label>
                                <input type="number" className="w-full px-4 py-2 border rounded-lg focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Enter UFID:</label>
                                <input type="text" placeholder="Enter without hyphen" className="w-full px-4 py-2 border rounded-lg focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-gray-700">International Student:</label>
                                <select className="w-full px-4 py-2 border rounded-lg focus:border-blue-500">
                                    <option>Select...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700">Desired Working Hours:</label>
                                <input type="number" placeholder="Max 20 hrs for international students" className="w-full px-4 py-2 border rounded-lg focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Upload Resume:</label>
                                <input type="file" className="w-full px-4 py-2 border rounded-lg focus:border-blue-500" />
                            </div>
                        </div>
                        <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">Update Profile</button>
                    </form>
                </div>
            </section>

            {/* Course Application Table */}
            <section className="mx-auto my-8 max-w-7xl p-6 bg-gray-300 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-black mb-4 text-center ">Apply for Available Courses</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full border rounded-lg">
                        <thead className="bg-black text-lg font-semibold text-white">
                            <tr>
                                <th className="border p-2">Course Name</th>
                                <th className="border p-2">Professor Name</th>
                                <th className="border p-2">Taken?</th>
                                <th className="border p-2">Grade</th>
                                <th className="border p-2">Preference</th>
                                <th className="border p-2">Comments</th>
                                <th className="border p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className="text-center text-black">
                                <td className="border p-2">Course A</td>
                                <td className="border p-2">Dr Cognition</td>
                                <td className="border p-2">
                                    <select className="w-full px-2 py-1 border rounded-lg focus:border-blue-500">
                                        <option>Select...</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </td>
                                <td className="border p-2">
                                <select className="w-full px-2 py-1 border rounded-lg focus:border-blue-500">
                                        <option>Select...</option>
                                        <option>A</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                    </select>
                                </td>
                                <td className="border p-2 flex items-center justify-center space-x-1 bg-white mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <button key={i} className="text-red-500 focus:outline-none">
                                            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                                                <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                            </svg>
                                        </button>
                                    ))}
                                </td>
                                <td className="border p-2"><input type="text" className="w-full border rounded-lg px-2 py-1 focus:border-blue-500" /></td>
                                <td className="border p-2 space-x-2 flex flex-row justify-around">
                                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600">Applied</button>
                                    <button className="bg-red-400 text-white px-3 py-1 rounded-lg hover:bg-red-500">Revoke</button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className=''>
                            <tr className="text-center text-black">
                                <td className="border p-2">Course A</td>
                                <td className="border p-2">Dr Cognition</td>
                                <td className="border p-2">
                                    <select className="w-full px-2 py-1 border rounded-lg focus:border-blue-500">
                                        <option>Select...</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </td>
                                <td className="border p-2">
                                <select className="w-full px-2 py-1 border rounded-lg focus:border-blue-500">
                                        <option>Select...</option>
                                        <option>A</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                    </select>
                                </td>
                                <td className="border p-2 flex items-center justify-center space-x-1 bg-white mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <button key={i} className="text-red-500 focus:outline-none">
                                            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                                                <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                            </svg>
                                        </button>
                                    ))}
                                </td>
                                <td className="border p-2"><input type="text" className="w-full border rounded-lg px-2 py-1 focus:border-blue-500" /></td>
                                <td className="border p-2 space-x-2 flex flex-row justify-around">
                                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600">Apply</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-black text-white py-4 text-center">
                <p>© 2024 University of Florida. All rights reserved.</p>
            </footer>
        </div>
    );
}
