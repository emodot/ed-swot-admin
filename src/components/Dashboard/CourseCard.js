import React from "react";
import { ReactComponent as CourseIcon } from "assets/icons/course-icon.svg";
import { ReactComponent as TutorIcon } from "assets/icons/tutor-icon.svg";

const CourseCard = ({
  title,
  subtitle,
  instructor,
  image,
  category,
  desc,
  tutorRole,
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
            {title}{" "}
            {subtitle && (
              <span className="text-12 font-aileron_sb text-brand_secondary">
                ({subtitle})
              </span>
            )}
          </h3>
          <p className="text-14 font-aileron_r text-[#434343] mt-2">{desc}</p>

          <div className="flex items-center justify-between mt-4 mb-2">
            <div className="flex items-center gap-2">
              <img src={tutorImg} alt="tutor avatar" className="h-10" />
              <div>
                <p className="text-14 font-aileron_sb text-brand_secondary">
                  {instructor}
                </p>
                <p className="text-12 text-border_stroke_2">{tutorRole}</p>
              </div>
            </div>
            <div className="ml-auto flex gap-1 items-center bg-[#EBF5FF] rounded-[16px] px-3 py-1 w-fit">
              <TutorIcon />
              <p className="font-albra_sans_m text-[#166EB4] text-14">Tutor</p>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="flex-1 bg-brand_primary text-brand_secondary font-aileron_r text-14 py-2 rounded-md">
              Join Now
            </button>
            <button className="flex-1 text-brand_secondary font-aileron_r text-14 py-2 rounded-md">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
