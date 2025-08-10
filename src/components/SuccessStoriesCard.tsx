
interface SuccessStoriesCardProps {
    title: string;
    authors: string;
    imageSrc: string;
}

const SuccessStoriesCard = ({ title, authors, imageSrc }: SuccessStoriesCardProps) => {
    return (
        <div className="w-full max-w-[588px]">
            <img className="w-full h-[360px] rounded-[16px]" src={imageSrc} alt={title} />
            <div className="mt-[16px]">
                <div className="font-[600] text-[18px] text-[#181D27]">{title}</div>
                <p className="text-[16px] font-[400] text-[#535862]">
                    {authors}
                </p>
            </div>
        </div>
    );
};

export default SuccessStoriesCard;