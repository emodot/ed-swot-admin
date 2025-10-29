import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { ChevronDown } from "lucide-react";

export default function StudentEnrollment() {
  const data = [
    { year: 2020, value: 10 },
    { year: 2021, value: 15 },
    { year: 2022, value: 50 },
    { year: 2023, value: 60 },
    { year: 2024, value: 10 },
    { year: 2025, value: 20 },
    { year: 2026, value: 60 },
    { year: 2027, value: 100 },
  ];

  return (
    <div className="w-full font-aileron_r text-brand_secondary space-y-5">
      {/* Chart Container */}
      <div className="border border-neutral_stroke_2 rounded-[10px] p-5 bg-white">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-18 font-aileron_sb">Student Enrollment</h2>

          {/* Dropdown */}
          <div className="flex items-center gap-2 border border-neutral_stroke_2 rounded-md px-3 py-1 text-14 cursor-pointer">
            Yearly
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="h-[220px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#08CF5A" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#08CF5A" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#1C1C1C", fontSize: 12 }}
              />
              <YAxis
                tickFormatter={(value) => `${value}%`}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#1C1C1C", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  background: "#ffffff",
                  border: "1px solid #DFE2E2",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#08CF5A"
                fill="url(#colorGreen)"
                strokeWidth={2}
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Top Month Card */}
        <div className="border border-neutral_stroke_2 rounded-[10px] p-5 bg-white">
          <p className="text-14 font-aileron_r mb-1">Top month</p>
          <h2 className="text-24 font-aileron_b text-[#47A025]">MARCH</h2>
          <p className="text-12 font-aileron_r text-[#47A025]">2026</p>
        </div>

        {/* Top Year Card */}
        <div className="border border-neutral_stroke_2 rounded-[10px] p-5 bg-white">
          <p className="text-14 font-aileron_r mb-1">Top year</p>
          <h2 className="text-24 font-aileron_b text-[#47A025]">2023</h2>
          <p className="text-12 font-aileron_r text-[#47A025]">2400 students</p>
        </div>
      </div>
    </div>
  );
}
