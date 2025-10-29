import React from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react";

const Activities = () => {
  return (
    <div className="bg-white border border-neutral_stroke_2 rounded-2xl shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-18 font-aileron_sb text-brand_secondary">
          Activities
        </h2>
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-14 text-border_stroke_2 font-aileron_sb">
            Sort by
          </span>
          <span className="font-aileron_sb text-14 text-brand_secondary">
            Newest
          </span>
          <ChevronRight size={14} />
        </div>
      </div>

      <div className="space-y-4">
        {/* Activity Item */}
        <ActivityItem
          img="https://randomuser.me/api/portraits/men/11.jpg"
          message="Gael Harry just joined Graphic Design Course"
          time="12 Sept, 2025; 12:00PM"
        />
        <ActivityItem
          message="Your payment for Igbo Language Course could not be processed."
          time="12 Sept, 2025; 12:00PM"
        />
        <ActivityItem
          message="You’ve successfully enrolled in Aeronautics Course. 🥳"
          time="12 Sept, 2025; 12:00PM"
        />
        <ActivityItem
          message="Special offer! Get 20% off your next course."
          time="12 Sept, 2025; 12:00PM"
        />
        <ActivityItem
          img="https://randomuser.me/api/portraits/men/52.jpg"
          message="New Course Alert: Foundations Of Aeronautics"
          time="12 Sept, 2025; 12:00PM"
        />
        <ActivityItem
          message="A classmate replied to your discussion post"
          time="12 Sept, 2025; 12:00PM"
        />
      </div>
    </div>
  );
}

// COMPONENTS
const ActivityItem = ({ img, message, time }) => (
  <div className="flex items-start gap-3 border-b border-neutral_stroke_2 pb-3 last:border-none">
    {img && (
      <img src={img} alt="" className="w-8 h-8 rounded-full object-cover" />
    )}
    <div>
      <p className="text-brand_secondary text-14 font-aileron_sb leading-snug">
        {message}
      </p>
      <p className="text-10 text-border_stroke_2 mt-1 font-aileron_r">
        {time}
      </p>
    </div>
  </div>
);

export default Activities