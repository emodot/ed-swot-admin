import React from "react";
import { ReactComponent as CourseIcon } from "assets/icons/course-icon.svg";

const InprogressCourseCard = ({
  title,
  progress,
  instructor,
  image,
  category,
  tutorImg,
}) => {
  return (
    <>
      <div className="max-w-[26rem] group rounded-[12px] border border-neutral_stroke_2 overflow-hidden shadow-md bg-white p-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[15px] mb-4">
            <div
              className="w-full h-[10rem] transition-transform duration-300 ease-in-out group-hover:scale-105"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div className="absolute top-4 left-4 flex gap-2 items-center bg-[#FFF2EB] rounded-[16px] px-4 py-1 w-fit">
            <CourseIcon />
            <p className="font-albra_sans_m text-dark_brand_primary text-14">
              {category}
            </p>
          </div>
        </div>
        <div className="">
          <h3 className="text-16 font-aileron_sb text-brand_secondary">
            {title}
          </h3>

          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <p className="text-12 font-aileron_r">Completion</p>
              <p className="text-warning text-12 font-aileron_sb">
                {progress}%
              </p>
            </div>
            <div className="w-full bg-neutral_disabled h-2 rounded-full mb-3">
              <div
                className="bg-warning h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 mb-2">
            <div className="flex items-center gap-2">
              <img src={tutorImg} alt="tutor avatar" className="h-10" />
              <div>
                <p className="text-14 font-aileron_sb text-brand_secondary">
                  {instructor}
                </p>
              </div>
            </div>
            <button className="px-4 bg-brand_primary text-brand_secondary font-aileron_r text-14 py-2 rounded-md">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InprogressCourseCard;
