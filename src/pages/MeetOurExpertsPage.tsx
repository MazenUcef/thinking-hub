import MeetOurExperts from "../components/MeetOurExperts";
import RightArrow from "../assets/icons/RightArrow";
import LeftArrow from "../assets/icons/LeftArrow";
import Card1 from "../assets/images/Card.png";
import Card2 from "../assets/images/Card (1).png";
import Card3 from "../assets/images/Card (2).png";
import Card4 from "../assets/images/Card (3).png";
import Card5 from "../assets/images/Card (4).png";
import Card6 from "../assets/images/Card (5).png";
import Card7 from "../assets/images/Card (6).png";
import Card8 from "../assets/images/Card (7).png";
import Card9 from "../assets/images/Card (8).png";
import Card10 from "../assets/images/Card (9).png";
import Card11 from "../assets/images/Card (10).png";
import Card12 from "../assets/images/Card (11).png";
import DownArrow from "../assets/icons/DownArrow";

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
  {
    name: "Haneel Heniny",
    role: "Marketing expert",
    description:
      "Specializing in branding, communication, and stakeholder engagement.",
    image: Card5,
    socials: { linkedin: "#", x: "#" },
  },
  {
    name: "Obaid Ali Marzouk",
    role: "Startup mentor",
    description:
      "Helping founders turn ideas into thriving businesses through guidance and resources.",
    image: Card6,
    socials: { linkedin: "#", x: "#" },
  },
  {
    name: "Alaa Bahwan",
    role: "Business consultant",
    description:
      "Expert in business transformation and operational excellence.",
    image: Card7,
    socials: { linkedin: "#", x: "#" },
  },
  {
    name: "Youssef Dawood",
    role: "Social innovation advocate",
    description:
      "Building scalable solutions to tackle pressing social challenges.",
    image: Card8,
    socials: { linkedin: "#", x: "#" },
  },
  {
    name: "Dhaferal Dhaif",
    role: "Funding specialist",
    description:
      "Connecting innovators with the right investors for impactful ventures.",
    image: Card9,
    socials: { linkedin: "#", x: "#" },
  },
  {
    name: "Eman Al Fahad",
    role: "Leadership coach",
    description:
      "Empowering leaders and organizations to reach their full potential.",
    image: Card10,
    socials: { linkedin: "#", x: "#" },
  },
  {
    name: "Abdullah Faqihi",
    role: "Ecosystem builder",
    description:
      "Creating networks that foster innovation, collaboration, and growth.",
    image: Card11,
    socials: { linkedin: "#", x: "#" },
  },
  {
    name: "Khlood Ahmarah",
    role: "Innovation strategist",
    description:
      "Designing strategies that enable organizations to adapt and thrive.",
    image: Card12,
    socials: { linkedin: "#", x: "#" },
  },
];

const ExpertFilter: React.FC = () => {

  return (
    <div className="mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search by Expert name"
            className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {["Expertise", "Program Track", "Role", "Popular"].map(
            (_, i) => (
              <div key={i} className="relative w-full sm:w-auto">
                <DownArrow />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};


const Pagination: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto">
        <hr className="border-t border-gray-200 mb-6" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
            <LeftArrow /> Previous
          </button>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 bg-gray-200 text-[#414651] rounded focus:outline-none focus:ring-2 focus:ring-gray-500">
              1
            </button>
            <button className="w-8 h-8 bg-white text-[#717680] rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
              2
            </button>
            <button className="w-8 h-8 bg-white text-[#717680] rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
              3
            </button>
            <span className="text-gray-500">...</span>
            <button className="w-8 h-8 bg-white text-[#717680] rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
              8
            </button>
            <button className="w-8 h-8 bg-white text-[#717680] rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
              9
            </button>
            <button className="w-8 h-8 bg-white text-[#717680] rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
              10
            </button>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Next <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};


const MeetOurExpertsPage = () => {
  return (
    <section className="min-h-screen bg-white py-20 max-sm:px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <h2 className="text-5xl max-md:text-4xl font-bold text-[#181D27] mb-3">
              Meet Our Experts
            </h2>
            <p className="text-[#414651] max-w-xl text-base">
              Learn from experienced entrepreneurs, investors, and industry
              leaders who guide our programs.
            </p>
          </div>
        </div>
        <ExpertFilter/>
        <MeetOurExperts profiles={profiles} limit={12} />
        <Pagination />
      </div>
    </section>
  );
}

export default MeetOurExpertsPage
