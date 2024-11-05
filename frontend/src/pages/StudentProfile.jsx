
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Heart } from 'lucide-react';

export default function StudentProfile() {

    const [formData, setFormData] = useState({
        semester: '',
        cgpa: '',
        ufid: '',
        isInternational: '',
        workingHours: '',
        resume: null
      });
    
      const [errors, setErrors] = useState({});
      const [touched, setTouched] = useState({});
    
      const validate = (name, value) => {
        const newErrors = { ...errors };
        
        switch (name) {
          case 'semester':
            if (value === "Select...") {
              newErrors.semester = 'Please select a semester';
            } else {
              delete newErrors.semester;
            }
            break;
            
          case 'cgpa':
            if (!value) {
              newErrors.cgpa = 'CGPA is required';
            } else if (isNaN(value) || value < 0 || value > 4.0) {
              newErrors.cgpa = 'CGPA must be between 0 and 4.0';
            } else {
              delete newErrors.cgpa;
            }
            break;
            
          case 'ufid':
            if (!value) {
              newErrors.ufid = 'UFID is required';
            } else if (!/^\d{8}$/.test(value)) {
              newErrors.ufid = 'UFID must be 8 digits';
            } else {
              delete newErrors.ufid;
            }
            break;
            
          case 'isInternational':
            if (value === "Select...") {
              newErrors.isInternational = 'Please select your student status';
            } else {
             
              delete newErrors.isInternational;
            }
            break;
            
          case 'workingHours':
            console.log(formData.isInternational)
            if (!value) {
              newErrors.workingHours = 'Working hours are required';
            } else if (formData.isInternational === 'yes' && parseInt(value) > 20) {
              newErrors.workingHours = 'International students cannot work more than 20 hours';
            } else if (parseInt(value) <= 0 || parseInt(value) > 40) {
              newErrors.workingHours = 'Working hours must be between 1 and 40';
            } else {
              delete newErrors.workingHours;
            }
            break;
            
          case 'resume':
            if (!value) {
              newErrors.resume = 'Please upload your resume';
            } else {
              delete newErrors.resume;
            }
            break;
            
          default:
            break;
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        const newValue = name === 'resume' ? files[0] : value;
        
        setFormData(prev => ({
          ...prev,
          [name]: newValue
        }));
        
        if (touched[name]) {
          validate(name, newValue);
        }
      };
    
      const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({
          ...prev,
          [name]: true
        }));
        validate(name, formData[name]);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate all fields
        const touchedAll = {
          semester: true,
          cgpa: true,
          ufid: true,
          isInternational: true,
          workingHours: true,
          resume: true
        };
        setTouched(touchedAll);
        
        let isValid = true;
        Object.keys(formData).forEach(key => {
          if (!validate(key, formData[key])) {
            isValid = false;
          }
        });
        
        if (isValid) {
          console.log('Form submitted:', formData);
          // Handle form submission
        }
      };


      {/*
        
        -------------------------------------------------------
        -------------------------------------------------------
        
        
        */}




        const [courses, setCourses] = useState([
            {
              id: 1,
              courseName: 'Course A',
              professorName: 'Dr Cognition',
              taken: '',
              grade: '',
              preference: 5,
              comments: '',
              status: 'applied'
            },
            {
              id: 2,
              courseName: 'Course A',
              professorName: 'Dr Cognition',
              taken: '',
              grade: '',
              preference: 5,
              comments: '',
              status: 'pending'
            }
          ]);
        
          const handleChanger = (courseId, field, value) => {
            setCourses(prevCourses => 
              prevCourses.map(course => {
                if (course.id === courseId) {
                  // Reset grade if taken is set to "no"
                  if (field === 'taken' && value === 'no') {
                    return { ...course, [field]: value, grade: '' };
                  }
                  return { ...course, [field]: value };
                }
                return course;
              })
            );
          };
        
          const handleAction = (courseId, action) => {
            setCourses(prevCourses =>
              prevCourses.map(course => {
                if (course.id === courseId) {
                  return { ...course, status: action === 'apply' ? 'applied' : 'pending' };
                }
                return course;
              })
            );
          };
        
          const renderPreferenceHearts = (preference) => {
            return Array(5).fill(0).map((_, index) => (
              <Heart
                key={index}
                className={`w-4 h-4 ${index < preference ? 'fill-red-500 text-red-500' : 'text-gray-300'}`}
              />
            ));
          };
        
                
                
                












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
                    <form  onSubmit={handleSubmit} className="w-full space-y-4">
                        <div className="flex justify-center">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/007/469/004/small_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg"
                                alt="Student" className="h-32 w-32 rounded-full shadow-lg" />
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-gray-700">Semester Joined:</label>
                                <select name="semester" value={formData.semester} onChange={handleChange} onBlur={handleBlur} className={`w-full px-4 py-2 border rounded-lg focus:border-blue-500 ${
                errors.semester && touched.semester ? 'border-red-500' : 'border-gray-300'
              }`}>
                                    <option>Select...</option>
                                    <option>Fall 2023</option>
                                    <option>Spring 2023</option>
                                    <option>Summer 2023</option>
                                </select> 
                                {errors.semester && touched.semester && (
                                <div className="flex items-center mt-1 text-red-500 text-sm">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.semester}
                                </div>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700">Enter CGPA:</label>
                                <input type="number" step="0.01" name="cgpa" placeholder='Enter only numbers'
                                value={formData.cgpa}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                className={`w-full px-4 py-2 border rounded-lg focus:border-blue-500 ${
                                                errors.cgpa && touched.cgpa ? 'border-red-500' : 'border-gray-300'
                                            }`} />
                                {errors.cgpa && touched.cgpa && (
                                <div className="flex items-center mt-1 text-red-500 text-sm">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.cgpa}
                                </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-gray-700">Enter UFID:</label>
                                <input type="text" name="ufid"
                                    value={formData.ufid}
                                    onChange={handleChange}
                                    onBlur={handleBlur} placeholder="Enter without hyphen" className={`w-full px-4 py-2 border rounded-lg focus:border-blue-500 ${
                                        errors.ufid && touched.ufid ? 'border-red-500' : 'border-gray-300'
                                      }`}/>
                                    {errors.ufid && touched.ufid && (
                                    <div className="flex items-center mt-1 text-red-500 text-sm">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.ufid}
                                    </div>
                                    )}
                            </div>
                            <div>
                                <label className="block text-gray-700">International Student:</label>
                                <select name="isInternational"
                                    value={formData.isInternational}
                                    onChange={handleChange}
                                    onBlur={handleBlur} className={`w-full px-4 py-2 border rounded-lg focus:border-blue-500 ${
                                        errors.isInternational && touched.isInternational ? 'border-red-500' : 'border-gray-300'
                                      }`}
                                 >     
                                    <option>Select...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                {errors.isInternational && touched.isInternational && (
                                <div className="flex items-center mt-1 text-red-500 text-sm">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.isInternational}
                                </div>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700">Desired Working Hours:</label>
                                <input type="number"
                                name="workingHours"
                                value={formData.workingHours}
                                onChange={handleChange}
                                onBlur={handleBlur} placeholder="Max 20 hrs for international students" 
                                className={`w-full px-4 py-2 border rounded-lg focus:border-blue-500 ${
                                    errors.workingHours && touched.workingHours ? 'border-red-500' : 'border-gray-300'
                                  }`} />
                                {errors.workingHours && touched.workingHours && (
                                <div className="flex items-center mt-1 text-red-500 text-sm">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.workingHours}
                                </div>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700">Upload Resume:</label>
                                <input type="file"
                                name="resume"
                                onChange={handleChange}
                                onBlur={handleBlur} className={`w-full px-4 py-2 border rounded-lg focus:border-blue-500 ${
                                    errors.resume && touched.resume ? 'border-red-500' : 'border-gray-300'
                                  } `} accept=".pdf,.doc,.docx"/>
                                {errors.resume && touched.resume && (
                                <div className="flex items-center mt-1 text-red-500 text-sm">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.resume}
                                </div>
                                )}

                            </div>
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">Update Profile</button>
                    </form>
                </div>
            </section>

            {/* Course Application Table */}
            {/* 
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
            */}



            <div className="p-6 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Apply for Available Courses</h2>
                
                <div className="overflow-x-auto">
                    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-black text-white">
                        <tr>
                        <th className="px-4 py-3 text-left">Course Name</th>
                        <th className="px-4 py-3 text-left">Professor Name</th>
                        <th className="px-4 py-3 text-left">Taken?</th>
                        <th className="px-4 py-3 text-left">Grade</th>
                        <th className="px-4 py-3 text-left">Preference</th>
                        <th className="px-4 py-3 text-left">Comments</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                        <tr key={course.id} className="border-t border-gray-200">
                            <td className="px-4 py-3">{course.courseName}</td>
                            <td className="px-4 py-3">{course.professorName}</td>
                            <td className="px-4 py-3">
                            <select
                                value={course.taken}
                                onChange={(e) => handleChanger(course.id, 'taken', e.target.value)}
                                className="w-full p-2 border rounded-md"
                            >
                                <option value="">Select...</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            </td>
                            <td className="px-4 py-3">
                            <select
                                value={course.grade}
                                onChange={(e) => handleChanger(course.id, 'grade', e.target.value)}
                                disabled={course.taken === 'no' || !course.taken}
                                className="w-full p-2 border rounded-md disabled:bg-gray-100 disabled:text-gray-400"
                            >
                                <option value="">Select...</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                            </td>
                            <td className="px-4 py-3">
                            <div className="flex gap-1">
                                {renderPreferenceHearts(course.preference)}
                            </div>
                            </td>
                            <td className="px-4 py-3">
                            <input
                                type="text"
                                value={course.comments}
                                onChange={(e) => handleChanger(course.id, 'comments', e.target.value)}
                                className="w-full p-2 border rounded-md"
                                placeholder="Add comments..."
                            />
                            </td>
                            <td className="px-4 py-3">
                            {course.status === 'applied' ? (
                                <div className="flex gap-2">
                                <span className="px-4 py-2 bg-green-200 text-white rounded-md">
                                    Applied
                                </span>
                                <button
                                    onClick={() => handleAction(course.id, 'revoke')}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                >
                                    Revoke
                                </button>
                                </div>
                            ) : (
                                <button
                                onClick={() => handleAction(course.id, 'apply')}
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                                >
                                Apply
                                </button>
                            )}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>




            {/* Footer */}
            <footer className="w-full bg-black text-white py-4 text-center">
                <p>© 2024 University of Florida. All rights reserved.</p>
            </footer>
        </div>
    );
}
