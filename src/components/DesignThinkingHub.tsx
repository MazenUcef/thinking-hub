import React from "react";
import Image from "../assets/images/polygon-pattern.png";
import Image86 from "../assets/images/image 86.png";
import Image87 from "../assets/images/image 87.png";
import Image88 from "../assets/images/image 88.png";
import Image89 from "../assets/images/image 89.png";
import Image90 from "../assets/images/image 90.png";
import Image91 from "../assets/images/image 91.png";
import Image93 from "../assets/images/image 93.png";




const DesignThinkingHub: React.FC = () => {
  return (
    <section className="bg-white min-h-screen px-4 py-12 md:px-8 lg:px-16 grid place-items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
        {/* Left Content */}
        <div>
          <div>
            <p className="text-[#008A4A] text-lg font-semibold mb-3">About</p>
            <h1 className="text-5xl max-md:text-4xl font-bold text-[#181D27] mb-3">
              Design Thinking Hub
            </h1>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-8 md:gap-8">
            <p className="text-[#414651] text-base font-normal mb-4">
              At Social Pioneer incubator, we believe in the power of innovation
              to drive social change. Our mission is to support nonprofit
              leaders, early-stage entrepreneurs, and organizations tackling
              real-world challenges by equipping them with the tools, knowledge,
              and community they need to grow and thrive.
            </p>
            <p className="text-[#414651] text-base font-normal mb-4">
              Whether you're launching a new initiative or scaling an existing
              one, our incubator provides structured programs, expert
              mentorship, and hands-on learning experiences tailored to your
              stage of development—from Start-Up to Maturity.
            </p>
            <p className="text-[#414651] text-base font-normal mb-6">
              We're more than an incubator. We're a collaborative hub where
              ideas take root, partnerships flourish, and impact multiplies.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="grid place-items-center max-sm:hidden">
          <img
            src={Image}
            alt="Impact participants"
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-7 max-sm:grid-cols-2 gap-10 -mt-40 max-sm:mt-10 place-items-center justify-items-center">
        <img
          src={Image86}
          alt="Logo 1"
          className="h-12 w-full object-contain"
        />
        <img
          src={Image87}
          alt="Logo 2"
          className="h-12 w-full object-contain"
        />
        <img
          src={Image88}
          alt="Logo 3"
          className="h-12 w-full object-contain"
        />
        <img
          src={Image89}
          alt="Logo 4"
          className="h-12 w-full object-contain"
        />
        <img
          src={Image90}
          alt="Logo 5"
          className="h-12 w-full object-contain"
        />
        <img
          src={Image91}
          alt="Logo 6"
          className="h-12 w-full object-contain"
        />
        <img
          src={Image93}
          alt="Logo 7"
          className="h-12 w-full object-contain"
        />
      </div>
    </section>
  );
};

export default DesignThinkingHub;
