import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from "../../components/students/Loading";
import Footer from '../../components/students/Footer';
import { calculateChaptertime, calculateCourseDuration, calculateNumberOfLectures, calculateRating } from "../../global_functions/Utility";
import humanizeDuration from 'humanize-duration';
import { fetchCourses } from '../../features/courseSlice';
import { fetchUser } from '../../features/userSlice';

function CourseDetails() {
  const user=localStorage.getItem('token')
  const dispatch = useDispatch();
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const allCourses = useSelector((state) => state.courses.allCourses);
  const { userData } = useSelector((state) => state.user);
    useEffect(() => {
      if (user) {
        dispatch(fetchUser());
      }
    }, [dispatch, user]);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

   useEffect(() =>{
    if (allCourses.length > 0) {
      const findCourse = allCourses.find(course => course._id === id);
      if (findCourse) {
        setCourseData(findCourse);
      }
    }
  }, [allCourses, id]);

  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    if (courseData && userData) {
      const enrolled = courseData.enrollledStudents.some(studentId => studentId === userData._id);
      setIsAlreadyEnrolled(enrolled);      
    }
  }, [courseData, userData]);
  

  return courseData ? (
    <>
      <div className='flex lg:pl-40 lg:pr-40 lg:flex-row flex-col-reverse gap-10 relative items-start justify-between lg:py-36 px-8 lg:pt-30 pt-20 text-left'>
        <div className='absolute top-0 left-0 w-full h-100 bg-gradient-to-b from-violet-200/70 inset-0'></div>

        {/* LEFT COLUMN */}
        <div className='max-w-xl z-10 text-gray-500'>
          <h1 className='lg:text-4xl text-xl font-semibold text-gray-800'>{courseData.courseTitle}</h1>
          <p className='pt-4 text-base' dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>

          <div className='flex items-center space-x-2'>
            <p className='text-black font-semibold'>{calculateRating(courseData)}</p>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <img className='w-3.5 h-3.5' key={i} src={i < Math.floor(calculateRating(courseData)) ? '../asset/rating_star.svg' : '../asset/star_dull_icon.svg'} alt="" />
              ))}
            </div>
            <p className='text-violet-700'>({courseData.courseRating.length} ratings)</p>
            <p>{courseData.enrollledStudents.length} {courseData.enrollledStudents.length > 1 ? 'students' : 'student'}</p>
          </div>

          <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
            <p className='text-sm'>Course by <span className='text-violet-700 underline'>PKD Arena</span></p>
          </div>

          <div className='pt-8 text-gray-800'>
            <h2 className='text-xl font-semibold'>Course Structure</h2>
            <div className='pt-5'>
              {courseData.courseContent.map((chapter, index) => (
                <div key={index} className='border border-gray-300 bg-white mb-2 rounded transition-all duration-300 hover:bg-violet-100/70'>
                  <div onClick={() => toggleSection(index)} className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'>
                    <div className='flex items-center gap-2'>
                      <img className={`transform transition-transform ${openSection[index] ? 'rotate-180' : ''}`} src="../asset/down_arrow_icon.svg" alt="" />
                      <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures - {calculateChaptertime(chapter)}</p>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openSection[index] ? 'max-h-96 bg-white' : 'max-h-0'}`}>
                    <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className='flex items-start gap-2 py-1'>
                          <img src="../asset/play_icon.svg" alt="play_icon" className='w-4 h-4 mt-1' />
                          <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                            <p>{lecture.lectureTitle}</p>
                            <div className='flex gap-2'>
                              <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='py-20 text-sm lg:text-default'>
            <h3 className='text-xl font-semibold text-gray-800'>Course Description</h3>
            <p className='pt-3' dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}></p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className='z-10'>
          <div className='max-w-[424px] shadow-lg rounded-t lg:rounded-none overflow-hidden bg-white'>
            <img src={courseData.courseThumbnail} alt="" />
            <div className='p-5'>
              <div className='flex gap-3 items-center pt-2'>
                <p className='text-gray-800 lg:text-2xl text-xl font-semibold'>₹{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
                <p className='text-lg text-gray-500 line-through'>₹{courseData.coursePrice}</p>
                <p className='text-lg text-gray-500'>{courseData.discount}% off</p>
              </div>

              <div className='flex items-center text-sm lg:text-default gap-4 pt-2 lg:pt-4 text-gray-500'>
                <div className='flex items-center gap-1'>
                  <img src="../asset/rating_star.svg" alt="star icon" />
                  <p>{calculateRating(courseData)}</p>
                </div>
                <div className='h-4 w-px bg-gray-500/40'></div>

                <div className='flex items-center gap-1'>
                  <img src="../asset/time_clock_icon.svg" alt="" />
                  <p>{calculateCourseDuration(courseData)}</p>
                </div>
                <div className='h-4 w-px bg-gray-500/40'></div>

                <div className='flex items-center gap-1'>
                  <img src="../asset/lesson_icon.svg" alt="" />
                  <p>{calculateNumberOfLectures(courseData)} Lectures</p>
                </div>
              </div>

              <button className='cursor-pointer lg:mt-6 mt-4 w-full py-3 rounded bg-violet-800 text-violet-200 font-medium transition-all duration-300 hover:scale-105 hover:bg-violet-900 hover:text-white'>
                {isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
              </button>
              <div className='pt-6 '>
                <p className='lg:text-xl text-lg font-medium text-gray-800'>What's in the course</p>
                <ul className='ml-4 pt-2 text-sm md:text-default list-disc text-gray-500'>
                  <li>Lifetime access with free updates</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : <Loading />;
}

export default CourseDetails;
