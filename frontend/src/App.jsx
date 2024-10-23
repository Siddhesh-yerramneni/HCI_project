import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import StudentLogin from './pages/StudentLogin.jsx';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sl' element={<StudentLogin />}/>
      </Routes>
    </BrowserRouter>
  );
}
