import BlackLogo from '../assets/icons/Navbar/BlackLogo'
import { Link } from 'react-router'

const MainNavbar = () => {
    const navLinks = [
        { label: 'Courses', to: '/availableCourses' },
        { label: 'Experts', to: '/meet' },
        { label: 'About Us', to: '/' },
        { label: 'FAQs', to: '/' },
        { label: 'Contact', to: '/' },
    ];
    return (
        <nav className="flex justify-between  items-center p-4 md:p-6 z-10 border-b-1 border-[#E9EAEB]">
            <div className='flex justify-between w-full items-center mx-[120px]'>
                <div className="flex items-center gap-[40px]">
                    <Link to={"/"}>
                        <BlackLogo className="mr-2" />
                    </Link>
                    <div className="gap-5 flex">
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.to} className="text-[16px] font-[400] text-black transition">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4 md:space-x-6">
                    <Link to={'/signin'} className="rounded-[8px] h-[40px] py-[10px] px-[20px] border-1 border-[#D5D7DA] text-[14px] font-[600] bg-white text-black flex justify-between items-center">
                        Log in
                    </Link>
                    <Link to={'/signup'}  className="rounded-[8px] h-[40px] py-[10px] px-[20px] text-white bg-[#008A4A] text-[14px] font-[600] flex justify-between items-center">
                        Sign up
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default MainNavbar