import { Link } from 'react-router';
import GreenLogo from '../assets/icons/Footer/GreenLogo';
import { useState, useEffect } from 'react';
import videoSrc from '../assets/videos/Navbar/video.mp4';

const Navbar = () => {
    const navLinks = [
        { label: 'Programs', to: '#' },
        { label: 'Courses', to: '#' },
        { label: 'Experts', to: '#' },
        { label: 'About Us', to: '#' },
        { label: 'FAQs', to: '#' },
        { label: 'Contact', to: '#' },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: 'Empowering Social Entrepreneurs',
            description: 'We help purpose-driven founders build sustainable ventures that create positive impact at scale. Join our community of changemakers.',
            button1: 'Join a Program',
            button2: 'Learn More',
        },
        {
            title: 'Innovate with Purpose',
            description: 'Discover tools and resources to turn your ideas into impactful solutions. Start your journey today.',
            button1: 'Explore Tools',
            button2: 'Get Started',
        },
        {
            title: 'Innovate with Purpose',
            description: 'Discover tools and resources to turn your ideas into impactful solutions. Start your journey today.',
            button1: 'Explore Tools',
            button2: 'Get Started',
        },
        {
            title: 'Innovate with Purpose',
            description: 'Discover tools and resources to turn your ideas into impactful solutions. Start your journey today.',
            button1: 'Explore Tools',
            button2: 'Get Started',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index:number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative bg-gray-800 text-white min-h-[780px] flex flex-col justify-between">
            {/* Navigation */}
            <div className="px-[120px] z-10">
                <nav className="flex justify-between items-center p-4 md:p-6 z-10">
                    <div className="flex items-center gap-[40px]">
                        <GreenLogo className="mr-2" />
                        <div className="gap-5 flex">
                            {navLinks.map((link, index) => (
                                <Link key={index} to={link.to} className="text-[16px] font-[400] text-white transition">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <button className="rounded-[8px] h-[40px] py-[10px] px-[20px] border-1 border-[#D5D7DA] text-[14px] font-[600] bg-white text-black flex justify-between items-center">
                            Log in
                        </button>
                        <button className="rounded-[8px] h-[40px] py-[10px] px-[20px] bg-[#008A4A] text-[14px] font-[600] flex justify-between items-center">
                            Sign up
                        </button>
                    </div>
                </nav>

                {/* Hero Content Slider */}
                <div className="flex flex-col z-10 mt-[140px] w-[690px]">
                    <h1 className="text-[72px] font-[700] transition-opacity duration-1000 mb-[16px]">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="font-[400] text-[18px] transition-opacity duration-1000 mb-[48px]">
                        {slides[currentSlide].description}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 transition-opacity duration-1000">
                        <button className="rounded-[8px] h-[44px] py-[10px] px-[16px] bg-[#008A4A] text-[14px] font-[600] flex justify-between items-center">
                            {slides[currentSlide].button1}
                        </button>
                        <button className="rounded-[8px] h-[44px] py-[10px] px-[16px] border-1 border-[#D5D7DA] text-[14px] font-[600] bg-white text-black flex justify-between items-center">
                            {slides[currentSlide].button2}
                        </button>
                    </div>
                    {/* Slider Dots */}
                    <div className="flex justify-start gap-2 mt-[130px]">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-[16px] h-[4px] rounded-[500px] ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Video with Backdrop */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    className="w-full h-full object-cover scale-150"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={videoSrc}
                />
                <div className="absolute inset-0 bg-[#00000099]" />
            </div>
        </div>
    );
};

export default Navbar;