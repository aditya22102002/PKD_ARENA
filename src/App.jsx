import { useState } from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/students/Home'
import CourseList from './pages/students/CourseList'
import CourseDetails from './pages/students/CourseDetails'
import MyEnroll from './pages/students/MyEnroll'
import Player from './pages/students/Player'
import Loading from './components/students/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourse from './pages/educator/MyCourse'
import StudentEnroll from './pages/educator/StudentEnroll'
import NavBar from './components/students/NavBar'
import PrivacyPolicy from './pages/students/PrivacyPolicy'
import Terms_condition from './pages/students/Terms_condition'
import RefundPolicy from './pages/students/RefundPolicy'
import AboutUs from './pages/students/AboutUs'




function App() {

  const isEducatorRoute=useMatch('/educator/*')

  return (
    <>
      <div className='text-default min-h-screen bg-white' >
        {!isEducatorRoute && <NavBar/>}
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
          

          <Route path='/educator' element={<Educator />} >
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='add-course' element={<AddCourse/>} />
            <Route path='my-courses' element={<MyCourse/>} />
            <Route path='student-enrolled' element={<StudentEnroll/>} />

          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
