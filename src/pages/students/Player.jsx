import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import humanizeDuration from 'humanize-duration';
import { calculateChaptertime, calculateCourseDuration, calculateNumberOfLectures, calculateRating } from "../../global_functions/Utility";
import YouTube from 'react-youtube';
import Footer from '../../components/students/Footer';
import Rating from '../../components/students/Rating';

function Player() {
  const { courseId } = useParams()
  const [courseData, setCourseData] = useState({})
  const allCourses = useSelector((state) => state.courses.allCourses)
  const [enrolledCourses, setEnrolledCourses] = useState([])
  const [openSection, setOpenSection] = useState({})
  const [playeData, setPlayerData] = useState(null)

  const fetUserEnrolledCourses = async () => {
    setEnrolledCourses(allCourses)
  }
  const getCourseData = () => {
    enrolledCourses.map((course) => {
      if (course._id === courseId) {
        setCourseData(course)
      }
    })
  }
  const toggleSection = (index) => {
    setOpenSection((prev) => (
      {
        ...prev,
        [index]: !prev[index]
      }
    ))
  }
  useEffect(() => {
    fetUserEnrolledCourses()
    getCourseData()
  }, [enrolledCourses])


  return (
    <>
      <div className='p-4 sm:p-10 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:px-20'>
        {/* left coloumn */}
        <div className='text-gray-800'>
          <h2 className='text-xl font-semibold'>Course Structure</h2>
          <div className='pt-5'>
            {courseData && courseData?.courseContent?.map((chapter, index) => (
              <div key={index} className='border border-gray-300 bg-violet-50 mb-2 rounded '>
                <div onClick={() => toggleSection(index)} className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'>
                  <div className='flex items-center gap-2'>
                    <img className={`transform transition-transform ${openSection[index] ? 'rotate-180' : ''}`} src="../src/assets/down_arrow_icon.svg" alt="" />
                    <p className='font-medium md:text-base text-sm' >{chapter.chapterTitle}</p>
                  </div>
                  <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures - {calculateChaptertime(chapter)} </p>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openSection[index] ? 'max-h-96 bg-white' : 'max-h-0'}`}>
                  <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                    {chapter.chapterContent.map((lectures, index) => (
                      <li key={index} className='flex items-start gap-2 py-1'>
                        <img src={true ? '../asset/blue_tick_icon.svg' : '../asset/play_icon.svg'} className='w-4 h-4 mt-1' />
                        <div className='flex-items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                          <p>{lectures.lectureTitle}</p>
                          <div className='flex gap-2'>
                            <p className=''>{humanizeDuration(lectures.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>

                          </div>
                        </div>
                        <button className="cursor-pointer w-1/4 p-1 rounded bg-violet-800 text-white font-medium 
                        hover:bg-violet-900 hover:rounded-md hover:text-white  transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_10px_rgba(0,0,0,0)] hover:shadow-violet-600
                        ">

                          {lectures.lectureUrl && <p onClick={() => setPlayerData({
                            ...lectures, chapter: index + 1, lectures: index + 1
                          })} className='text-white cursor-pointer 
                          '>Watch</p>}

                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className=' px-1 flex items-center gap-2 py-3 mt-10'>
            <h1 className='text-xl font-bold'>Rate This Course: </h1>
            <Rating initialRating={0} />
          </div>
        </div>




        {/* right coloumn */}
        <div className='md:mt-10'>

          {playeData ? (
            <div>
              <YouTube videoId={playeData.lectureUrl.split('/').pop()} iframeClassName='w-full aspect-video' />
              <div className='mt-1'>
                <p>{playeData.chapter}. {playeData.lectures} {playeData.lectureTitle}</p>
                <button className='text-violet-800'>{false ? 'Completed' : 'Mark Complete'}</button>
              </div>
            </div>
          ) : <img src={courseData ? courseData.courseThumbnail : ''} alt="" />}

        </div>
      </div>
      <Footer />
    </>

  )
}

export default Player
