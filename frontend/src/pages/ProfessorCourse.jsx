import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

export default function ProfessorCourse() {
  function handleChange() {
    return;
  }

  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    { type: "user", content: "hello" },
    { type: "bot", content: "Good morning professor" },
    { type: "user", content: "Your TA application looks great! I remember you from CAP4410." },
    { type: "bot", content: "Thanks! I'm excited about the opportunity to help students" },
    { type: "user", content: " That's great. I'll be in touch soon to discuss the details." },
    
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatboxRef = useRef(null);

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

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Left Arrow */}
      <Link
        to="/previous-page"
        className="absolute left-16 top-1/4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
      >
        <FaArrowLeft size={40} />
      </Link>

      {/* Right Arrow */}
      <Link
        to="/next-page"
        className="absolute right-16 top-1/4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
      >
        <FaArrowRight size={40} />
      </Link>

      {/* Header */}
      <header className="w-full bg-black py-3 shadow-md flex justify-between items-center px-8">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7DjAZZLWBGma-Vm01k1yr2ErdOngnGFEJg&s"
              alt="University Logo"
              className="h-12 w-12 mr-4"
            />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">
              TA Assignment System (TAAS)
            </h1>
            <p className="text-md text-white">University of Florida</p>
          </div>
        </div>
        <div className="flex space-x-6">
          <button className="text-white text-lg hover:text-blue-600 transition">
            About
          </button>
          <button className="text-white text-lg hover:text-blue-600 transition">
            Help
          </button>
          <button className="text-white text-lg hover:text-blue-600 transition">
            Contact
          </button>
          <button className="text-white text-lg hover:text-blue-600 transition">
            Logout
          </button>
        </div>
      </header>

      <section>
        <div className="flex-grow items-center justify-center bg-zinc-200">
          <div className="flex flex-col items-center mt-4">
            <form className="flex flex-grow flex-col w-1/3 text-xl font-semibold p-3">
              <img
                src="https://cdn-icons-png.freepik.com/256/2798/2798310.png?semt=ais_hybrid"
                alt="student image"
                srcSet=""
                className="h-40 w-40 rounded-lg ml-40"
              />
            </form>
          </div>
        </div>

        <div className="col-start-1 col-span-7">
          <h1 className="h-14 w-full text-2xl text-center font-semibold text-white bg-black pt-3">
            List of Applied Students for CAP5510
          </h1>
        </div>

        <div className="grid  grid-cols-8 grid-rows-1 gap-2 justify-start p-5 -mt-16 pt-16">
          <div className="col-start-1 col-span-4 px-3 mt-8">
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
          <table className="table-auto border-collapse border border-slate-400">
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

                <th className="border border-slate-300 p-2">Description</th>

                <th className="border border-slate-300 p-2">
                  Match Percentage
                </th>

                <th className="border border-slate-300 p-2">
                  Professor Decision
                </th>
                <th className="border border-slate-300 p-2">Chat</th>
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
                  <div className=" mx-auto ">
                    <p className="leading">
                    As an HCI enthusiast, I'm passionate about user-centered
                      <span className="hidden" id="more-text">
                       eager to assist students in creating innovative and inclusive digital experiences.
                      </span>
                    </p>
                    <button
                      id="toggle-btn"
                      className="mt1 text-blue-500 focus:outline-none"
                      onClick={handleChange}
                    >
                      Read More
                    </button>
                    <button
                      id="hide-btn"
                      className="hidden mt-4 text-blue-500 focus:outline-none"
                    >
                      Hide
                    </button>
                  </div>
                </td>

                {/* Actions */}

                <td className="border border-slate-500 p-2">
                  <h1 className="text-lg">60</h1>
                </td>

                <td className="border border-slate-500 p-2">
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className=" ml-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 content-center"
                    >
                      Accepted
                    </button>
                  </div>
                </td>

                <td className="border border-slate-500 p-2">
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
                      <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
                        <p className="text-lg font-semibold">Sidedish Yermaneni</p>
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
                                  ? "bg-blue-500 text-white"
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
                          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody className="text-center">
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

                {/*Description*/}

                <td className="border border-slate-500">
                  <div className=" mx-auto ">
                    <p className="leading">
                    I'm keen on HCI and enjoy helping others. 
                      <span className="hidden" id="more-text">
                      I'm excited to share my knowledge and skills to foster a collaborative and creative learning environment.
                      </span>
                    </p>
                    <button
                      id="toggle-btn"
                      className="mt1 text-blue-500 focus:outline-none"
                      onClick={handleChange}
                    >
                      Read More
                    </button>
                    <button
                      id="hide-btn"
                      className="hidden mt-4 text-blue-500 focus:outline-none"
                    >
                      Hide
                    </button>
                  </div>
                </td>

                {/* Match Percentage (%) */}

                <td className="border border-slate-500 p-2">
                  <h1 className="text-lg">80</h1>
                </td>

                <td className="border border-slate-500">
                  <div className="p-2 flex">
                    <div className="w-1/2 flex">
                      <button
                        type="submit"
                        className="bg-green-400 hover:bg-green-600 text-white p-3 rounded text-md w-auto"
                      >
                        Accept
                      </button>
                      <button
                        type="submit"
                        className="bg-red-400 hover:bg-red-600 text-white p-3 ml-6 rounded text-md w-auto "
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </td>

                <td className="border border-slate-500 p-2">
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
                      <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
                        <p className="text-lg font-semibold">Indu Pots</p>
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
                                  ? "bg-blue-500 text-white"
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
                          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                        >
                          Send
                        </button>
                      </div>
                    </div>
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
                  <div className=" mx-auto ">
                    <p className="leading">
                    I'm passionate about designing user-friendly interfaces and 
                      <span className="hidden" id="more-text">
                      am eager to share my knowledge and experience to help students succeed in their HCI projects.
                      </span>
                    </p>
                    <button
                      id="toggle-btn"
                      className="mt1 text-blue-500 focus:outline-none"
                      onClick={handleChange}
                    >
                      Read More
                    </button>
                    <button
                      id="hide-btn"
                      className="hidden mt-4 text-blue-500 focus:outline-none"
                    >
                      Hide
                    </button>
                  </div>
                </td>

                {/* Description */}

                <td className="border border-slate-500 p-2">
                  <h1 className="text-lg">80</h1>
                </td>

                {/* Professor Decision */}

                <td className="border border-slate-500">
                  <div className="p-2 flex">
                    <div className="w-1/2 flex">
                      <button
                        type="submit"
                        className="bg-green-400 hover:bg-green-600 text-white p-3 rounded text-md w-auto"
                      >
                        Accept
                      </button>
                      <button
                        type="submit"
                        className="bg-red-400 hover:bg-red-600 text-white p-3 ml-6 rounded text-md w-auto "
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </td>

                <td className="border border-slate-500 p-2">
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
                      <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
                        <p className="text-lg font-semibold">Mohammad Samba</p>
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
                                  ? "bg-blue-500 text-white"
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
                          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
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

      <footer className="w-full bg-black text-white py-3 text-center">
        <p>© 2024 University of Florida. All rights reserved.</p>
      </footer>
    </div>
  );
}
