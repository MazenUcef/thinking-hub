import Card1 from "../assets/images/Card.png";
import Card2 from "../assets/images/Card (1).png";
import Card3 from "../assets/images/Card (2).png";
import Card4 from "../assets/images/Card (3).png";
import MeetOurExperts from "./MeetOurExperts";
import RightArrow from "../assets/icons/RightArrow";
import LeftArrow from "../assets/icons/LeftArrow";

const MeetOurExpertsSection: React.FC = () => {
  const profiles = [
    {
      name: "Salem Maza",
      role: "Experienced leader in social impact",
      description:
        "Working at the intersection of innovation and sustainable finance.",
      image: Card1,
      socials: { linkedin: "#", x: "#" },
    },
    {
      name: "Ibrahim Almas",
      role: "Dynamic professional",
      description:
        "A visionary leader with a track record of building and scaling ventures.",
      image: Card2,
      socials: { linkedin: "#", x: "#" },
    },
    {
      name: "Haneel Siddick",
      role: "Experienced strategist",
      description:
        "Driving growth and transformation in the social impact sector.",
      image: Card3,
      socials: { linkedin: "#", x: "#" },
    },
    {
      name: "Majed Saif",
      role: "Social entrepreneur",
      description:
        "Committed to building sustainable ventures and funding social innovation.",
      image: Card4,
      socials: { linkedin: "#", x: "#" },
    },
  ];

  return (
    <section className="bg-[#F5F5F5] min-h-screen grid place-items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h2 className="text-5xl max-md:text-4xl font-bold text-[#181D27] mb-3">
              Meet Our Experts
            </h2>
            <p className="text-[#414651] mb-12 max-w-lg text-base">
              Learn from experienced entrepreneurs, investors, and industry
              leaders who guide our programs.
            </p>
          </div>
          <button
            className="mt-4 md:mt-0 bg-[#008346] text-white px-6 py-2 rounded-lg hover:bg-[#006d32] border border-white/10 text-sm font-medium shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_0_rgba(10,13,18,0.05)_inset,0_1px_2px_0_rgba(10,13,18,0.05)]"
          >
            View All Experts
          </button>
        </div>
        <div>
          <MeetOurExperts profiles={profiles} />
        </div>
        <div className="flex justify-start mt-6 space-x-4">
          <button className="bg-white rounded-full p-2 border border-[#E9EAEB]">
            <LeftArrow />
          </button>
          <button className="bg-white rounded-full p-2 border border-[#E9EAEB]">
            <RightArrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetOurExpertsSection;
