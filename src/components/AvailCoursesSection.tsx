import { useState } from 'react';
import AvailCoursesCard from "./AvailCoursesCard";
import Finance from '../assets/images/Finance.png'
import Technology from '../assets/images/Technology.png'
import Marketing from '../assets/images/Marketing.png'
import Strategy from '../assets/images/Strategy.png'
import Governance from '../assets/images/Governance.png'
import Leadership from '../assets/images/Leadership.png'

const mockData = [
    {
        title: "Digital Transformation & Data Governance",
        category: "Technology",
        weeks: 10,
        description: "Strategize around data ethics, digital infrastructure, and automation to increase efficiency and transparency.",
        imageSrc: Technology,
        bg: "#B2DDFF",
        text: "#175CD3"
    },
    {
        title: "Machine Learning Fundamentals",
        category: "AI",
        weeks: 8,
        description: "Learn the basics of machine learning algorithms and their applications.",
        imageSrc: Marketing,
        bg: "#ECFDF3",
        text: "#067647"
    },
    {
        title: "Web Development Bootcamp",
        category: "Programming",
        weeks: 12,
        description: "Master full-stack web development with HTML, CSS, JavaScript, and React.",
        imageSrc: Governance,
        bg: "#FDF2FA",
        text: "#C11574",
    },
    {
        title: "Data Science Essentials",
        category: "Data",
        weeks: 9,
        description: "Explore data analysis, visualization, and statistical methods.",
        imageSrc: Leadership,
        bg: "#F9DBAF",
        text: "#B93815"
    },
    {
        title: "Cybersecurity Basics",
        category: "Security",
        weeks: 6,
        description: "Understand fundamental concepts in cybersecurity and protection strategies.",
        imageSrc: Finance,
        bg: "#B2DDFF",
        text: "#175CD3"
    },
    {
        title: "Cybersecurity Basics",
        category: "Security",
        weeks: 6,
        description: "Understand fundamental concepts in cybersecurity and protection strategies.",
        imageSrc: Strategy,
        bg: "#B2DDFF",
        text: "#175CD3"
    },
];

const AvailCoursesSection = () => {
    const [activeCategory, setActiveCategory] = useState("All Courses");

    const uniqueCategories = [...new Set(mockData.map(course => course.category))];
    const categories = ["All Courses", ...uniqueCategories];

    return (
        <div className='bg-white p-[120px]'>
            <div className="w-full">
                <div className="mb-[12px]">
                    <h1 className="font-[700] text-[48px]">Available Courses</h1>
                </div>
                <div className="flex justify-between items-center mb-[48px]">
                    <div>
                        <h2 className="font-[400] text-[16px] text-[#414651]">Enhance your skills with our specialized courses, designed to build capacity in key areas.</h2>
                    </div>
                    <div>
                        <button className="w-[168px] h-[48px] rounded-[8px] py-[12px] px-[16px] flex justify-center text-[16px] font-[600] text-white items-center bg-[#008346]">View All Courses</button>
                    </div>
                </div>
                <div className="flex gap-[16px] items-center mb-[48px]">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setActiveCategory(category)}
                            className={`w-[121px] h-[40px] rounded-full py-[8px] text-nowrap cursor-pointer px-[16px] flex justify-center items-center text-[16px] font-[600] ${category === activeCategory
                                    ? "bg-[#D3624C] text-white"
                                    : "bg-[#F5F5F5] border-1 border-[#D5D7DA] text-[#181D27]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[56px] w-full">
                    {mockData.map((course) => (
                        <AvailCoursesCard key={course.title} {...course} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailCoursesSection;