import React from "react";
import { Link } from "react-router-dom";
import { calculateRating } from "../../global_functions/Utility.js";

function CourseCard({ course }) {
  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => scrollTo(0, 0)}
      className="bg-violet-50 border border-gray-500/30 pb-6 overflow-hidden rounded-lg shadow-[0px_0px_20px_rgba(124,58,237,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_25px_rgba(124,58,237,0.6)] hover:bg-white"
    >
      <img className="w-full" src={course.courseThumbnail} alt="" />
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <div className="flex items-center space-x-2">
          <p className="text-black font-semibold">{calculateRating(course)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                className="w-3.5 h-3.5"
                key={i}
                src={
                  i < Math.floor(calculateRating(course))
                    ? "./asset/rating_star.svg"
                    : "./asset/star_dull_icon.svg"
                }
                alt=""
              />
            ))}
          </div>
          <p className="text-gray-500">{course.courseRatings.length}</p>
        </div>
        <p className="text-base font-semibold text-gray-800">
          ₹{(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  );
}

export default CourseCard;
