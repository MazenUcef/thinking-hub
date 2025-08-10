import React from 'react'
import BlackLogo from '../assets/icons/Navbar/BlackLogo'
import { Link } from 'react-router'

const MainNavbar = () => {
    const navLinks = [
        { label: 'Programs', to: '#' },
        { label: 'Courses', to: '#' },
        { label: 'Experts', to: '#' },
        { label: 'About Us', to: '#' },
        { label: 'FAQs', to: '#' },
        { label: 'Contact', to: '#' },
    ];
    return (
        <nav className="flex justify-between  items-center p-4 md:p-6 z-10 border-b-1 border-[#E9EAEB]">
            <div className='flex justify-between w-full items-center mx-[120px]'>
                <div className="flex items-center gap-[40px]">
                    <BlackLogo className="mr-2" />
                    <div className="gap-5 flex">
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.to} className="text-[16px] font-[400] text-black transition">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4 md:space-x-6">
                    <button className="rounded-[8px] h-[40px] py-[10px] px-[20px] border-1 border-[#D5D7DA] text-[14px] font-[600] bg-white text-black flex justify-between items-center">
                        Log in
                    </button>
                    <button className="rounded-[8px] h-[40px] py-[10px] px-[20px] text-white bg-[#008A4A] text-[14px] font-[600] flex justify-between items-center">
                        Sign up
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default MainNavbar