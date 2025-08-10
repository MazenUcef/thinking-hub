import LeftArrow from "../assets/icons/LeftArrow";
import RightArrow from "../assets/icons/RightArrow";

export const Pagination: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="w-full mx-auto">
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