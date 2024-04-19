import { useState } from "react";

import CountUp from "react-countup";

import ScrollTrigger from 'react-scroll-trigger';


const ActiveUser = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="bg-gradient-to-r from-[#0A1219] via-[#4C9DE9] to-[#0A1219]">
        <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 p-10 text-[#EEE]">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">
              {counterOn && <CountUp start={0} end={115} duration={3.50} />}k+
            </h2>
            <h2 className="mt-4 text-xl">Active user</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">
              {counterOn && <CountUp start={0} end={88} duration={2.75} />}k+
            </h2>
            <h2 className="mt-4 text-xl">User passive</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">
              {counterOn && <CountUp start={0} end={40} duration={2.35} />}%
            </h2>
            <h2 className="mt-4 text-xl">Increase in user</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">
              &gt;{counterOn && <CountUp start={0} end={10} duration={2} />}k
            </h2>
            <h2 className="mt-4 text-xl">Good Testimonials</h2>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default ActiveUser;
