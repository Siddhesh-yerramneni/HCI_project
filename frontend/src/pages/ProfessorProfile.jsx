import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect, useRef } from "react";
import { Alert } from './Alert';
export default function ProfessorProfile() {
    function handleChange() {
        return;
      }
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "user", content: "hello" },
    { type: "bot", content: "Good morning professor" },
    { type: "user", content: "Your TA application looks great! I remember you from CAP4410." },
    { type: "bot", content: "Thanks! I'm excited about the opportunity to help students" },
    { type: "user", content: " That's great. I'll be in touch soon to discuss the details." },
    
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatboxRef = useRef(null);
  const [isEnabled,setIsEnabled] = useState(true)
  const [isAccepted,setIsAccepted] = useState(false);
  const [isVisible,setIsVisible] = useState(false);
  const [isProfile,setIsProfile] = useState(false);


  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    setMessages([...messages, { type: "user", content: inputValue }]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: "Blah Blah Blah",
        },
      ]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  function handleProfile(event){
    event.preventDefault();
    setIsEnabled(!isEnabled);
    setIsAccepted(false);
    setIsVisible(true);
    setIsProfile(true);
  }

  function handleToggle(event){
    event.preventDefault();
    setIsEnabled(!isEnabled);
    setIsVisible(true);
    setIsAccepted(true);
    setIsProfile(false);
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
                <h2 className="text-2xl text-center font-semibold text-gray-800">Dr Cognition's Profile</h2>
                <p className="text-center text-black mt-2">Please keep your profile updated for smooth handling of the application processings for the positions and communication.</p>
                <p className="text-center text-black mb-2">Make your position requests.</p>
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
                                    Available hours
                                    </p>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-3xl text-center font-bold text-gray-800 dark:text-white">
                                    150
                                    </h3>
                                    <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                    You have 150 available hours to fill.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 size-2/12">
                                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                                    <p className="mt-1 text-md text-white dark:text-white">
                                    Postings made
                                    </p>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-3xl text-center font-bold text-gray-800 dark:text-white">
                                    4
                                    </h3>
                                    <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                    You have 4 active postings.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 size-2/12">
                                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                                    <p className="mt-1 text-md text-white dark:text-white">
                                    You accepted 
                                    </p>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-3xl text-center font-bold text-gray-800 dark:text-white">
                                    2
                                    </h3>
                                    <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                    You found 2 students eligible.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 size-2/12">
                                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                                    <p className="mt-1 text-md text-white dark:text-white">
                                    You rejected
                                    </p>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-3xl text-center font-bold text-gray-800 dark:text-white">
                                    1
                                    </h3>
                                    <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                    Decision can be changed if active.
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
                <h3 className="text-xl font-semibold text-black mb-4 text-center ">Manage postings</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full border rounded-lg">
                        <thead className="bg-black text-lg font-semibold text-white">
                            <tr>
                                <th className="border p-2"> Enter course Name</th>
                                <th className="border p-2">Number of people</th>
                                <th className="border p-2">Available hours</th>
                                <th className="border p-2">Willing to take Masters students</th>
                                <th className="border p-2">Willing to take PhD students</th>
                                <th className="border p-2">Job description</th>
                                <th className="border p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center text-black">
                                <td className="border p-2">CAP5100</td>
                                <td className="border p-2">4</td>
                                <td className="border p-2">32</td>
                                <td className="border p-2">Yes </td>
                                <td className="border p-2">Yes </td>
                                <td className="border p-2 text-blue-700">CAP5100_TA.pdf</td>
                                <td className="border p-2 space-x-2 flex flex-row justify-around">
                                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 cursor-not-allowed">Posted</button>
                                    <button className="bg-red-400 text-white px-3 py-1 rounded-lg hover:bg-red-500">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="text-center text-black">
                                <td className="border p-2"><input type="text" className="w-full border rounded-lg px-2 py-1 focus:border-blue-500" /></td>
                                <td className="border p-2"><input type="number" className="w-full border rounded-lg px-2 py-1 focus:border-blue-500" /></td>
                                <td className="border p-2"><input type="number" className="w-full border rounded-lg px-2 py-1 focus:border-blue-500" /></td>
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
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </td>
                                <td className="border p-2"><input type="file" className="w-full border rounded-lg px-2 py-1 focus:border-blue-500" /></td>
                                <td className="border p-2 space-x-2 flex flex-row justify-around">
                                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600">Post</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex flex-row justify-around'>
                          <button className='bg-black text-white rounded-lg p-2 w-1/3'>Create a new posting</button>
                        </div>
                </div>
            </section>

            {/* Course Application Table */}
            <section className="mx-auto my-8 max-w-7xl p-6 bg-gray-300 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-black mb-4 text-center ">Manage your application decisions</h3>
                {/* Checkbox and Sort Container */}
              <div className="flex justify-evenly w-full items-center mb-6">
                {/* Checkboxes */}
                <div className="col-start-1">
            <div className="max-w overflow-hidden rounded shadow-lg">
              <div className="w-full">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-white dark:text-white"
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
                      className="bg-black border border-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-black dark:border-black dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 text-white"
                      placeholder="Search for Students"
                      required=""
                    />
                  </div>
                </form>
              </div>
            </div>
            </div>

            <div className="">
              <div className="max-w-sm overflow-hidden rounded shadow-lg">
                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black  bg-black p-2.5 text-sm text-black  focus:border-blue-500 focus:ring-blue-500 dark:border-black  dark:bg-black  dark:text-white dark:placeholder-white  dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="DEFAULT" disabled>
                    Select the course
                  </option>
                  <option value="AD">CAP1000</option>
                  <option value="BS">CAP2000</option>
                  <option value="FR">CAP5100</option>
                  <option value="DE">CAP6930</option>
                </select>
              </div>
            </div>
          
            <div className="">
              <div className="max-w-sm overflow-hidden rounded shadow-lg">
                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black bg-black p-2.5 text-sm text-black focus:border-blue-500 focus:ring-blue-500 dark:border-black dark:bg-black dark:text-white dark:placeholder-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
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

            <div className="">
              <div className="max-w-sm overflow-hidden rounded shadow-lg">
                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black  bg-black p-2.5 text-sm text-black  focus:border-blue-500 focus:ring-blue-500 dark:border-black  dark:bg-black  dark:text-white dark:placeholder-white  dark:focus:border-blue-500 dark:focus:ring-blue-500"
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

            <div className="">
              <div className="max-w-sm overflow-hidden rounded shadow-lg">
                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="block w-full rounded-lg border border-black  bg-black p-2.5 text-sm text-black  focus:border-blue-500 focus:ring-blue-500 dark:border-black  dark:bg-black  dark:text-white dark:placeholder-white  dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="DEFAULT" disabled>
                    Education
                  </option>

                  <option value="BS">Masters</option>
                  <option value="FR">Phd</option>
                </select>
              </div>
            </div>

            <div className="">
              <div className="max-w-sm overflow-hidden rounded shadow-lg">
              
                  <select id="sort-time" className="p-2 w-full border border-gray-300 rounded-lg bg-black text-white">
                  <option value="DEFAULT">
                    Sort by
                  </option>
                    <option value="time">Recent</option>
                    <option value="course">Oldest</option>
                  </select>
                </div>
                </div>
            </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full border rounded-lg">
                        <thead className="bg-black text-lg font-semibold text-white">
                            <tr>
                                <th className="border p-2">Student Name</th>
                                <th className="border p-2">Resume</th>
                                <th className="border p-2">Grade</th>
                                <th className="border p-2">Hours</th>
                                <th className="border p-2">Program</th>
                                <th className="border p-2">Student's comment</th>
                                <th className="border p-2">Student's Preference</th>
                                <th className="border p-2">Action</th>
                                <th className="border p-2">Chat</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className="text-center text-black">
                                <td className="border p-2">Eddie Brook</td>
                                <td className="border p-2 underline text-blue">Eddie Brook's resume</td>
                                <td className="border p-2">A</td>
                                <td className="border p-2">35</td>
                                <td className="border p-2">PhD</td>
                                <td className="border p-2">I'm passionate about designing user-friendly interfaces and <span className='text-blue-700'>Read more...</span></td>
                                <td className="border p-2">5</td>
                                <td className="border border-slate-300 p-2 text-center">
                                        {isEnabled? (
                                        <div className="flex gap-2">
                                        <span className="px-4 py-2 bg-green-500 text-white rounded-md">
                                            Accepted
                                        </span>
                                        <button
                                            onClick={() => handleToggle() }
                                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                        >
                                            Revoke
                                        </button>
                                        </div>
                                    ) : (
                                        <button
                                        onClick={() => handleToggle()  }
                                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                                        >
                                        Apply
                                        </button>
                                    )}
                                </td>
                                <td className="border p-2">
                                    <div className="">
                                        <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 text-md font-semibold "
                                        >
                                        <span className="w-6 h-6" />
                
                                        Chat
                                        </button>
                                    </div>

                                    <div
                                        className={`fixed bottom-16 right-4 w-96 ${
                                        !isOpen ? "hidden" : ""
                                        }`}
                                    >
                                        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
                                        <div className="p-4 border-b bg-black text-white rounded-t-lg flex justify-between items-center">
                                            <p className="text-lg font-semibold">Eddie Brook</p>
                                            <button
                                            onClick={() => setIsOpen(false)}
                                            className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                                            >
                                            <span className="w-10 h-10 text-bold">X</span>
                                            </button>
                                        </div>

                                        <div
                                            ref={chatboxRef}
                                            className="p-4 h-80 overflow-y-auto"
                                        >
                                            {messages.map((message, index) => (
                                            <div
                                                key={index}
                                                className={`mb-2 ${
                                                message.type === "user" ? "text-right" : "text-left"
                                                }`}
                                            >
                                                <p
                                                className={`${
                                                    message.type === "user"
                                                    ? "bg-black text-white"
                                                    : "bg-gray-200 text-black"
                                                } rounded-lg py-2 px-4 inline-block`}
                                                >
                                                {message.content}
                                                </p>
                                            </div>
                                            ))}
                                        </div>

                                        <div className="p-4 border-t flex">
                                            <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyUp={handleKeyPress}
                                            placeholder="Type a message"
                                            className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <button
                                            onClick={handleSendMessage}
                                            className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-600 transition duration-300"
                                            >
                                            Send
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <Alert onClose={() => setIsVisible(false)} visible={isVisible} profile={isProfile} application={false} acceptance={isAccepted}></Alert>

            {/* Footer */}
            <footer className="w-full bg-black text-white py-4 text-center">
                <p>© 2024 University of Florida. All rights reserved.</p>
            </footer>
        </div>
    );
}
