"use client"

import CountUp from "react-countup";

const stats = [
    {
        num: 9,
        text: "Projects completed",
    },
    {
        num: 8,
        text: "Technologies mastered",
    },
    {
        num: 500,
        text: "Hours worked",
    },
];

const Stats = () => {
  return (
    <div className="flex flex-col gap-10 items-start pt-6">
      {stats.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 ">
          <CountUp
            end={item.num}
            duration={5}
            delay={0.5}
            className="text-3xl xl:text-4xl font-extrabold text-accent"
          />
          <p
            className={`${
              item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
            } leading-snug text-white`}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats
