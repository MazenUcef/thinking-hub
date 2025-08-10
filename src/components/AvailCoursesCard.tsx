

interface AvailCoursesCardProps {
    title: string;
    category: string;
    weeks: number;
    description: string;
    imageSrc: string;
    text: string;
    bg: string;
}

const AvailCoursesCard = ({ title, category, weeks, description, imageSrc, text, bg }: AvailCoursesCardProps) => {
    return (
        <div className="w-[384px]">
            <img className="w-[384px] h-[256px] rounded-[16px]" src={imageSrc} alt={title} />
            <div className="mt-[16px]">
                <div className="flex justify-between mb-[8px]">
                    <span style={{
                        backgroundColor: bg,
                        color: text
                    }} 
                    className={`w-[95px] h-[24px] flex justify-center items-center font-[500] text-[14px] rounded-full px-[10px] py-[2px]`}>{category}</span>
                    <span className="text-[14px] font-[500] text-[#181D27]">{weeks} weeks</span>
                </div>
                <div className="font-[600] text-[18px] text-[#181D27]">{title}</div>
                <p className="text-[16px] font-[400] text-[#535862]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AvailCoursesCard;