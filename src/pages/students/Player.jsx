import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import humanizeDuration from 'humanize-duration';
import { calculateChaptertime } from "../../global_functions/Utility";
import YouTube from 'react-youtube';
import Footer from '../../components/students/Footer';
import Rating from '../../components/students/Rating';
import { fetchUser } from '../../features/userSlice';

function Player() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const userToken = localStorage.getItem("token");
  
  const { userData } = useSelector((state) => state.user);
  const allCourses = useSelector((state) => state.courses.allCourses);
  
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    if (userToken) {
      dispatch(fetchUser());
    } else {
      navigate('/login');
    }
  }, [dispatch, userToken, navigate]);

  useEffect(() => {
    if (userData && userData.enrolledCourses && allCourses.length > 0) {
      const foundCourse = allCourses.find(course => course._id === courseId);
      if (foundCourse) {
        setCourseData(foundCourse);
      }
    }
  }, [userData, allCourses, courseId]);

  const toggleSection = (index) => {
    setOpenSection(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      {courseData && userData?.enrolledCourses.includes(courseId) ? (
        <div className='p-4 sm:p-10 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:px-20'>
          {/* Left Column */}
          <div className='text-gray-800'>
            <h2 className='text-xl font-semibold'>Course Structure</h2>
            <div className='pt-5'>
              {courseData.courseContent?.map((chapter, index) => (
                <div key={index} className='border border-gray-300 bg-violet-50 mb-2 rounded'>
                  <div 
                    onClick={() => toggleSection(index)} 
                    className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'
                  >
                    <div className='flex items-center gap-2'>
                      <img 
                        className={`transform transition-transform ${openSection[index] ? 'rotate-180' : ''}`} 
                        src="../src/assets/down_arrow_icon.svg" 
                        alt=""
                      />
                      <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm md:text-default'>
                      {chapter.chapterContent.length} lectures - {calculateChaptertime(chapter)}
                    </p>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openSection[index] ? 'max-h-96 bg-white' : 'max-h-0'}`}>
                    <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                      {chapter.chapterContent.map((lecture, idx) => (
                        <li key={idx} className='flex items-start gap-2 py-1'>
                          <img src={'../asset/blue_tick_icon.svg'} className='w-4 h-4 mt-1' />
                          <div className='flex-items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                            <p>{lecture.lectureTitle}</p>
                            <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>
                          </div>
                          {lecture.lectureUrl && (
                            <button 
                              className="cursor-pointer w-1/4 p-1 rounded bg-violet-800 text-white font-medium 
                                hover:bg-violet-900 hover:rounded-md hover:text-white transition-all duration-300 
                                hover:scale-105 hover:shadow-violet-600"
                              onClick={() => setPlayerData({ ...lecture, chapter: index + 1, lectureIdx: idx + 1 })}
                            >
                              Watch
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className='px-1 flex items-center gap-2 py-3 mt-10'>
              <h1 className='text-xl font-bold'>Rate This Course: </h1>
              <Rating initialRating={0} />
            </div>
          </div>

          {/* Right Column */}
          <div className='md:mt-10'>
            {playerData ? (
              <div>
                <YouTube videoId={playerData.lectureUrl.split('/').pop()} iframeClassName='w-full aspect-video' />
                <div className='mt-1'>
                  <p>{playerData.chapter}. {playerData.lectureIdx} {playerData.lectureTitle}</p>
                  <button className='text-violet-800'>{false ? 'Completed' : 'Mark Complete'}</button>
                </div>
              </div>
            ) : (
              <img src={courseData.courseThumbnail} alt="" />
            )}
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-xl font-bold text-gray-800">{courseData?.courseTitle}</h2>
          <p className="text-gray-600 mt-2">{courseData?.courseDescription}</p>
          <button 
            className="mt-5 px-6 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
            onClick={() => navigate(`/course/${courseId}`)}
          >
            Enroll in this Course
          </button>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Player;