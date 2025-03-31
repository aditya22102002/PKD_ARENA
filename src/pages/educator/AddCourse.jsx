import React, { useEffect, useRef, useState } from 'react'
import uniqid from 'uniqid'
import Quill from 'quill'
import { useDispatch } from "react-redux";
import { addCourse } from "../../features/addCourseSlice";

function AddCourse() {
  const quillRef = useRef(null)
  const courseDescription = useRef(null)
  const dispatch = useDispatch();
  const [courseTitle, setCourseTitle] = useState('')
  const [coursePrice, setCoursePrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [courseThumbnail, setImage] = useState(null)
  const [courseContent, setChapters] = useState([])
  const [showPopup, setShowpopup] = useState(false)
  const [currentChapterId, setCurrentChapterId] = useState(null)

  const [lectureDetails, setLectureDetails] = useState(
    {
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: ''
    }
  )

  const handleChapter = (action, chapterId) => {
    if (action === 'add') {
      const title = prompt('Enter Chapter Name:');
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder: courseContent.length > 0 ? courseContent.slice(-1)[0].chapterOrder + 1 : 1,

        };
        setChapters([...courseContent, newChapter])
      }
    } else if (action === 'remove') {
      setChapters(courseContent.filter((chapter) => chapter.chapterId !== chapterId));
    } else if (action === 'toggle') {
      setChapters(
        courseContent.map((chapter) =>
          chapter.chapterId === chapterId ? { ...chapter, collapsed: !chapter.collapsed } : chapter
        )
      )
    }
  }

  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === 'add') {
      setCurrentChapterId(chapterId);
      setShowpopup(true)
    } else if (action === 'remove') {
      setChapters(
        courseContent.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            chapter.chapterContent.splice(lectureIndex, 1);
          }
          return chapter
        })
      )
    }
  }

  const addLecture = () => {
    setChapters(
      courseContent.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newlecture = {
            ...lectureDetails,
            lectureOrder: chapter.chapterContent.length > 0 ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1 : 1,
            lectureId: uniqid()
          };
          chapter.chapterContent.push(newlecture)
        }
        return chapter
      })
    );
    setShowpopup(false)
    setLectureDetails({
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',

    });
  }

  const handleDubmit = async (e) => {
    e.preventDefault();

    const courseData = {
      courseTitle,
      coursePrice,
      discount,
      courseContent,
      courseThumbnail,
      courseDescription
    };
    dispatch(addCourse(courseData));
  }

  useEffect(() => {
    if (!quillRef.current && courseDescription.current) {
      quillRef.current = new Quill(courseDescription.current, {
        theme: 'snow',
      });
    }
  }, [])

  return (
    <div className='h-screen overflow-scroll flex flex-col items-start justify-between md:pb-0 p-4 pt-8 pb-0'>
      <form onSubmit={handleDubmit} className='flex flex-col gap-4 max-w-md w-full text-gray-500'>
        <div className='flex flex-col gap-1'>
          <p>Course Title</p>
          <input onChange={e => setCourseTitle(e.target.value)} type="text" placeholder='Type Here' className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500' required />
        </div>
        <div className='flex flex-col gap-1'>
          <p>Course Description</p>
          <div ref={courseDescription}></div>
        </div>

        <div className='flex items-center justify-between flex-wrap'>
          <div className='flex flex-col gap-1'>
            <p>Course Price</p>
            <input onChange={e => setCoursePrice(e.target.value)} value={coursePrice} type="number" min={0} placeholder='0' className='outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500' required />
          </div>
          <div className='flex md:flex-row flex-col items-center gap-3'>
            <p>Course Thumbnail</p>
            <label htmlFor="thumbnailImage" className='flex items-center gap-3'>
              <img src="../asset/file_upload_icon.svg" alt="" className='p-3 bg-violet-200 rounded cursor-pointer' />
              <input type="file" id='thumbnailImage' onChange={e => setImage(e.target.files[0])} accept='image/*' hidden />
              <img className='max-h-35' src={courseThumbnail ? URL.createObjectURL(courseThumbnail) : ''} alt="" />
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <p>Discount %</p>
          <input onChange={e => setDiscount(e.target.value)} value={discount} type="number" placeholder='0' min={0} max={100} className='outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500' required />
        </div>
        <div>
          {courseContent.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className='bg-white border rounded-lg md-4'>
              <div className='flex justify-between items-center p-4 border-b'>
                <div className='flex items-center'>
                  <img onClick={() => handleChapter('toggle', chapter.chapterId)} src="../asset/dropdown_icon.svg" width={14} alt="" className={`mr-2 cursor-pointer transition-all ${chapter.collapsed && "-rotate-90"}`} />
                  <span className='font-semibold'>{chapterIndex + 1} {chapter.chapterTitle}</span>
                </div>
                <span className='text-gray-500'>{chapter.chapterContent.length} Lectures</span>
                <img onClick={() => handleChapter('remove', chapter.chapterId)} src="../asset/cross_icon.svg" alt="" className='cursor-pointer' />
              </div>
              {!chapter.collapsed && (
                <div className='p-4'>
                  {chapter.chapterContent.map((lecture, lectureIndex) => (
                    <div key={lectureIndex} className='flex justify-between items-center mb-2'>
                      <span>{lectureIndex + 1} {lecture.lectureTitle} - {lecture.lectureDuration} mins - <a href={lecture.lectureUrl} target='_blank' className='text-violet-600'>Link</a></span>
                      <img src="../asset/cross_icon.svg" alt="" className='cursor-pointer' onClick={() => handleLecture('remove', chapter.chapterId, lectureIndex)} />
                    </div>
                  ))}
                  <div className='inline-flex bg-gray-100 p-2 rounded cursor-pointer mt-2' onClick={() => handleLecture('add', chapter.chapterId)}>
                    + Add letures
                  </div>
                </div>
              )}
            </div>
          ))}
          <div onClick={() => handleChapter('add')} className='flex justify-center items-center bg-blue-100 p-2 mt-4 rounded-lg cursor-pointer'>
            + Add Chapter
          </div>
          {showPopup && (
            <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
              <div className='bg-white text-gray-700 p-4 rounded relative w-full max-w-80'>
                <h2 className='text-lg font-semibold mb-4'> Add lecture</h2>
                <div className='mb-2'>
                  <p>Lecture Title</p>
                  <input type="text" className='mt-1 block w-full border rounded py-1 px-2' value={lectureDetails.lectureTitle}
                    onChange={(e) => setLectureDetails({ ...lectureDetails, lectureTitle: e.target.value })} />
                </div>
                <div className='mb-2'>
                  <p>Lecture Duration(minutes)</p>
                  <input type="text" className='mt-1 block w-full border rounded py-1 px-2' value={lectureDetails.lectureDuration}
                    onChange={(e) => setLectureDetails({ ...lectureDetails, lectureDuration: e.target.value })} />
                </div>
                <div className='mb-2'>
                  <p>Lecture URL</p>
                  <input type="text" className='mt-1 block w-full border rounded py-1 px-2' value={lectureDetails.lectureUrl}
                    onChange={(e) => setLectureDetails({ ...lectureDetails, lectureUrl: e.target.value })} />
                </div>
                <button onClick={() => addLecture()} type='button' className='w-full bg-blue-400 text-white px-4 py-2 rounded'>Add</button>
                <img onClick={() => setShowpopup(false)} src="../asset/cross_icon.svg" alt="" className='absolute top-4 right-4 w-4 cursor-pointer' />
              </div>
            </div>
          )}
        </div>
        <button type='submit' className='bg-black text-white w-max py-2.5 px-8 rounded cursor-pointer my-4'>ADD</button>
      </form>
    </div>
  )
}

export default AddCourse
