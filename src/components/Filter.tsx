

const Filter = () => {
    return (
        <div className="flex items-center w-full gap-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search by course name"
                    className="w-[384px] h-[40px] p-2 border border-gray-300 rounded-md  "
                />
            </div>
            <select className="w-[180px] h-[40px] p-2 border border-gray-300 rounded-md  ">
                <option>Skill Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>
            <select className="w-[180px] h-[40px] p-2 border border-gray-300 rounded-md  ">
                <option>Learning Type</option>
                <option>Self-Paced</option>
                <option>Instructor-Led</option>
            </select>
            <select className="w-[180px] h-[40px] p-2 border border-gray-300 rounded-md  ">
                <option>Duration</option>
                <option>1-4 weeks</option>
                <option>5-8 weeks</option>
                <option>9+ weeks</option>
            </select>
            <select className="w-[180px] h-[40px] p-2 border border-gray-300 rounded-md  ">
                <option>Popular</option>
                <option>Most Popular</option>
                <option>Trending</option>
            </select>
        </div>
    );
};

export default Filter;