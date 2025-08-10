import React from "react";
import Image from "../assets/images/impact-stats.png";

const ImpactStats: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] min-h-screen py-12 px-[180px] grid place-items-center">
      <div className="w-full mx-auto grid lg:grid-cols-2 gap-8">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl max-md:text-4xl font-bold text-[#181D27] mb-3">
            Impact by the Numbers
          </h2>
          <p className="text-[#414651] mb-12 max-w-lg text-base">
            At Social Pioneer Incubator, our mission goes beyond training — we
            measure success by the impact our participants create in the world.
            From grassroots initiatives to national programs, our alumni are
            transforming communities, building sustainable solutions, and
            driving real change.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-8">
            <div>
              <p className="text-[#008346] font-bold text-6xl mb-3">120+</p>
              <p className="text-sm font-semibold text-[#181D27] w-[150px]">
                Social entrepreneurs supported
              </p>
            </div>
            <div>
              <p className="text-[#008346] font-bold text-6xl mb-3">200+</p>
              <p className="text-sm font-semibold text-[#181D27] w-[170px]">
                Community partnerships formed
              </p>
            </div>
            <div>
              <p className="text-[#008346] font-bold text-6xl mb-3">30+</p>
              <p className="text-sm font-semibold text-[#181D27] w-[150px]">
                Ventures scaled to national reach
              </p>
            </div>
            <div>
              <p className="text-[#008346] font-bold text-6xl mb-3">85%</p>
              <p className="text-sm font-semibold text-[#181D27] w-[200px]">
                Of projects continue beyond the program
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={Image}
            alt="Impact participants"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
