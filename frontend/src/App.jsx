import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import StudentLogin from './pages/StudentLogin.jsx';
import ProfessorLogin from './pages/ProfessorLogin.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import StudentProfile from './pages/StudentProfile.jsx';
import ProfessorProfile from './pages/ProfessorProfile.jsx';
import Adminp from './pages/Adminp.jsx';
import { Login } from './pages/Login.jsx';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sl' element={<StudentLogin />}/>
        <Route path='/pl' element={<ProfessorLogin />}/>
        <Route path='/al' element={<AdminLogin />}/>
        <Route path='/sp' element={<StudentProfile />}/>
        <Route path='/pp' element={<ProfessorProfile />}/>
        <Route path='/app' element={<Adminp />}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}




