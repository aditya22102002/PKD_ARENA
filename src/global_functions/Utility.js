import humanizeDuration from 'humanize-duration'


export function calculateRating(course) {
  if(course.courseRatings.length===0){
    return 0;
  }
  let totalRating=0;
  course.courseRatings.forEach(rating=>{
    totalRating+=rating.rating
  })
  return `${totalRating/ course.courseRatings.length}`;
  
}

export function calculateChaptertime(chapter){
  let time=0
  chapter.chapterContent.map((lecture)=> time+=lecture.lectureDuration)
  return humanizeDuration(time*60*1000,{units:["h","m"]})
}

export function calculateCourseDuration(course){
  let time=0
  course.courseContent.map((chapter)=> chapter.chapterContent.map((lectures)=> time+=lectures.lectureDuration))
  return humanizeDuration(time*60*1000,{units:["h","m"]})
}

export function calculateNumberOfLectures(course){
  let totalLectures=0
  course.courseContent.forEach(chapter=> {
    if(Array.isArray(chapter.chapterContent)){
      totalLectures+=chapter.chapterContent.length
    }
  })
  return totalLectures
}