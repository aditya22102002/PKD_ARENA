import { Route, Routes, useMatch } from 'react-router-dom';
import Home from './pages/students/Home';
import CourseList from './pages/students/CourseList';
import CourseDetails from './pages/students/CourseDetails';
import MyEnroll from './pages/students/MyEnroll';
import Player from './pages/students/Player';
import Loading from './components/students/Loading';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import MyCourse from './pages/educator/MyCourse';
import StudentEnroll from './pages/educator/StudentEnroll';
import NavBar from './components/students/NavBar';
import PrivacyPolicy from './pages/students/PrivacyPolicy';
import Terms_condition from './pages/students/Terms_condition';
import RefundPolicy from './pages/students/RefundPolicy';
import AboutUs from './pages/students/AboutUs';
import "quill/dist/quill.snow.css";

function App() {
  const isEducatorRoute = useMatch('/educator/*');

  return (
    <>
      <div className='relative min-h-screen bg-white overflow-hidden'>
        {/* Moving Gradient Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 animate-gradient"></div>

        {/* Navbar should always be on top */}
        <div className='relative z-20'>
          {!isEducatorRoute && <NavBar />}
        </div>
        
        <div className='relative z-10'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/course-list' element={<CourseList />} />
            <Route path='/course-list/:input' element={<CourseList />} />
            <Route path='/course/:id' element={<CourseDetails />} />
            <Route path='/my-enrollments' element={<MyEnroll />} />
            <Route path='/player/:courseId' element={<Player />} />
            <Route path='/ploading/:path' element={<Loading />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms&condition' element={<Terms_condition />} />
            <Route path='/refund-policy' element={<RefundPolicy />} />
            <Route path='/about-us' element={<AboutUs />} />

            <Route path='/educator' element={<Educator />}>
              <Route path='/educator' element={<Dashboard />} />
              <Route path='add-course' element={<AddCourse />} />
              <Route path='my-courses' element={<MyCourse />} />
              <Route path='student-enrolled' element={<StudentEnroll />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;