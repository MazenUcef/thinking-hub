import { Link } from 'react-router';
import GreenLogo from '../assets/icons/Footer/GreenLogo';
import NewBadge from '../assets/icons/Footer/NewBadge';
import XIcon from '../assets/icons/Footer/X';
import LinkedInIcon from '../assets/icons/Footer/Linkedin';
import FacebookIcon from '../assets/icons/Footer/Facebook';
import InstagramIcon from '../assets/icons/Footer/Instgram';
import SnapchatIcon from '../assets/icons/Footer/Snapchat';

// Define link arrays for each section
const designThinkingHubLinks = [
    { label: 'About us', to: '#' },
    { label: 'Courses', to: '#' },
    { label: 'Experts', to: '#' },
    { label: 'Success Stories', to: '#' },
    { label: 'Impacts', to: '#' },
    { label: 'Contact', to: '#' },
];

const programTracksLinks = [
    { label: 'Start-Up Program', to: '#', hasBadge: false },
    { label: 'Maturity Program', to: '#', hasBadge: false },
    { label: 'Growth Program', to: '#', hasBadge: true },
];

const resourcesLinks = [
    { label: 'Blog', to: '#' },
    { label: 'Newsletter', to: '#' },
    { label: 'Help centre', to: '#' },
    { label: 'Support', to: '#' },
];

const legalLinks = [
    { label: 'Terms', to: '#' },
    { label: 'Privacy', to: '#' },
    { label: 'Cookies', to: '#' },
    { label: 'Licenses', to: '#' },
];

const socialLinks = [
    { Icon: XIcon, to: '#' },
    { Icon: LinkedInIcon, to: '#' },
    { Icon: FacebookIcon, to: '#' },
    { Icon: InstagramIcon, to: '#' },
    { Icon: SnapchatIcon, to: '#' },
];

const Footer = () => {
    return (
        <div className="w-full mt-auto bg-[#0C0E12] px-4 sm:px-8 md:px-12 lg:px-[7.5rem] py-8 sm:py-12 md:py-16 min-h-[24rem]">
            {/* Top Section */}
            <div className="border-b border-[#22262F] pb-8 md:pb-16">
                <div className="mb-3 md:mb-4">
                    <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl text-white">
                        Ready to Build Your Impact?
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <h2 className="text-sm sm:text-base font-normal text-white max-w-md">
                        Join a track, explore a course, or connect with our team — your journey starts now.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="border border-[#373A41] w-full sm:w-36 bg-[#0C0E12] h-12 rounded-lg text-white text-sm sm:text-base font-semibold hover:bg-[#1A1C22] transition">
                            Browse Courses
                        </button>
                        <button className="w-full sm:w-36 bg-[#008A4A] h-12 rounded-lg text-white text-sm sm:text-base font-semibold hover:bg-[#006C3A] transition">
                            Join a Program
                        </button>
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-12 text-[#94979C] border-b border-[#22262F] mt-8 md:mt-16 pb-8 md:pb-16">
                {/* Logo and Description */}
                <div className="flex flex-col gap-4 md:gap-6 max-w-xs">
                    <GreenLogo />
                    <h1 className="text-sm sm:text-base font-normal">
                        Empowering changemakers through action and impact.
                    </h1>
                </div>

                {/* Design Thinking Hub Links */}
                <div className="flex flex-col gap-2 md:gap-3">
                    <h1 className="font-semibold text-xs sm:text-sm">Design Thinking Hub</h1>
                    {designThinkingHubLinks.map((link, index) => (
                        <Link key={index} className="font-semibold text-sm sm:text-base hover:text-white transition" to={link.to}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Program Tracks Links */}
                <div className="flex flex-col gap-2 md:gap-3">
                    <h1 className="font-semibold text-xs sm:text-sm">Program Tracks</h1>
                    {programTracksLinks.map((link, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Link className="font-semibold text-sm sm:text-base hover:text-white transition" to={link.to}>
                                {link.label}
                            </Link>
                            {link.hasBadge && <NewBadge />}
                        </div>
                    ))}
                </div>

                {/* Resources Links */}
                <div className="flex flex-col gap-2 md:gap-3">
                    <h1 className="font-semibold text-xs sm:text-sm">Resources</h1>
                    {resourcesLinks.map((link, index) => (
                        <Link key={index} className="font-semibold text-sm sm:text-base hover:text-white transition" to={link.to}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Legal Links */}
                <div className="flex flex-col gap-2 md:gap-3">
                    <h1 className="font-semibold text-xs sm:text-sm">Legal</h1>
                    {legalLinks.map((link, index) => (
                        <Link key={index} className="font-semibold text-sm sm:text-base hover:text-white transition" to={link.to}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row md:justify-between mt-8 gap-4 text-[#94979C]">
                <h1 className="font-normal text-sm sm:text-base">
                    © 2025 Design Thinking Hub. All rights reserved.
                </h1>
                <div className="flex gap-4 md:gap-6">
                    {socialLinks.map((link, index) => (
                        <Link key={index} to={link.to} className="hover:text-white transition">
                            <link.Icon />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;