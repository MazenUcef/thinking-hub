import hyperTwo from '../assets/images/hyperTwo.jpg'
import videoOne from '../assets/images/videoOne.png'
import Filter from '../components/Filter';
import SuccessStoriesCard from '../components/SuccessStoriesCard';


const mockData = [
    {
        title: "The Incubator helped me move from idea to launch in 6 months. I met my co-founder there too!",
        authors: "Rania, Founder of EduBridge Initiative",
        imageSrc: hyperTwo,
    },
    {
        title: "With the tools I gained from the Growth Track, we secured funding and reached 10,000+ beneficiaries.",
        authors: "Youssef, Start-Up Track Alumni",
        imageSrc: videoOne,
    },
    {
        title: "The Incubator helped me move from idea to launch in 6 months. I met my co-founder there too!",
        authors: "Rania, Founder of EduBridge Initiative",
        imageSrc: hyperTwo,
    },
    {
        title: "With the tools I gained from the Growth Track, we secured funding and reached 10,000+ beneficiaries.",
        authors: "Youssef, Start-Up Track Alumni",
        imageSrc: videoOne,
    },
    {
        title: "The Incubator helped me move from idea to launch in 6 months. I met my co-founder there too!",
        authors: "Rania, Founder of EduBridge Initiative",
        imageSrc: hyperTwo,
    },
    {
        title: "With the tools I gained from the Growth Track, we secured funding and reached 10,000+ beneficiaries.",
        authors: "Youssef, Start-Up Track Alumni",
        imageSrc: videoOne,
    },
    {
        title: "The Incubator helped me move from idea to launch in 6 months. I met my co-founder there too!",
        authors: "Rania, Founder of EduBridge Initiative",
        imageSrc: hyperTwo,
    },
    {
        title: "With the tools I gained from the Growth Track, we secured funding and reached 10,000+ beneficiaries.",
        authors: "Youssef, Start-Up Track Alumni",
        imageSrc: videoOne,
    },
    {
        title: "With the tools I gained the Growth Track, we secured funding and reached 10,000+ beneficiaries.",
        authors: "Youssef, Start-Up Track Alumni",
        imageSrc: videoOne,
    },
    {
        title: "With the tools from the Growth Track, we secured funding and reached 10,000+ beneficiaries.",
        authors: "Youssef, Start-Up Track Alumni",
        imageSrc: videoOne,
    },
];
const SuccessStories = () => {
    return (
        <div className="px-[120px] my-[70px] w-full">
            <div className="mb-[12px]">
                <h1 className="font-[700] text-[48px]">Success Stories</h1>
            </div>
            <div className="flex justify-between items-center mb-[48px]">
                <div>
                    <h2 className="font-[400] text-[16px] text-[#414651]">Lorem ipsum dolor sit amet consectetur adipiscing elit.</h2>
                </div>
                <div>
                    <button className="w-[227px] h-[48px] rounded-[8px] py-[12px] px-[16px] flex justify-center text-[16px] font-[600] text-white items-center bg-[#008346]">View All Success Stories</button>
                </div>
            </div>
            <div className='w-full mb-[32px]'>
                <Filter />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                {mockData.map((story) => (
                    <SuccessStoriesCard key={story.title} {...story} />
                ))}
            </div>
        </div>
    );
}

export default SuccessStories