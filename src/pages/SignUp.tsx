import { Link } from 'react-router';
import AuthImg from '../assets/images/authImg.png';

const SignUp = () => {
    return (
        <div className="flex flex-col md:flex-row h-full">
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-auto md:h-screen">
                <img
                    src={AuthImg}
                    alt="image"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Signup Form */}
            <div className="w-full md:w-1/2 flex-1 p-4 md:p-8 md:mx-[100px] overflow-y-auto">
                <h2 className="text-[24px] md:text-[30px] font-[700] mb-2 md:mb-4">Sign up</h2>
                <p className="text-[14px] md:text-[16px] font-[400] text-[#535862] mb-4 md:mb-[32px]">
                    Please enter your details.
                </p>

                {/* Form */}
                <form className="flex flex-col gap-4 md:gap-[22px]">
                    <div className="flex flex-col space-y-1  ">
                        <label htmlFor="fullName" className="text-[12px] md:text-[14px] font-[500] text-[#535862]">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Enter your full name"
                            className="w-full md:w-[520px] h-[40px] md:h-[44px] px-[12px] md:px-[14px] py-[8px] md:py-[10px] border border-[#D5D7DA] rounded-[8px]"
                        />
                    </div>
                    <div className="flex flex-col space-y-1  ">
                        <label htmlFor="email" className="text-[12px] md:text-[14px] font-[500] text-[#535862]">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full md:w-[520px] h-[40px] md:h-[44px] px-[12px] md:px-[14px] py-[8px] md:py-[10px] border border-[#D5D7DA] rounded-[8px]"
                        />
                    </div>
                    <div className="flex flex-col space-y-1  ">
                        <label htmlFor="phone" className="text-[12px] md:text-[14px] font-[500] text-[#535862]">
                            Phone number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter your phone number"
                            className="w-full md:w-[520px] h-[40px] md:h-[44px] px-[12px] md:px-[14px] py-[8px] md:py-[10px] border border-[#D5D7DA] rounded-[8px]"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="gender" className="text-[12px] md:text-[14px] font-[500] text-[#535862]">
                                Gender
                            </label>
                            <select
                                id="gender"
                                className="w-full md:w-[250px] h-[40px] md:h-[44px] px-[12px] md:px-[14px] py-[8px] md:py-[10px] border border-[#D5D7DA] rounded-[8px]"
                            >
                                <option>Select your gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-1  ">
                            <label htmlFor="dob" className="text-[12px] md:text-[14px] font-[500] text-[#535862]">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dob"
                                className="w-full md:w-[250px] h-[40px] md:h-[44px] px-[12px] md:px-[14px] py-[8px] md:py-[10px] border border-[#D5D7DA] rounded-[8px]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col space-y-1  ">
                            <label htmlFor="country" className="text-[12px] md:text-[14px] font-[500] text-[#535862]">
                                Country
                            </label>
                            <select
                                id="country"
                                className="w-full md:w-[250px] h-[40px] md:h-[44px] px-[12px] md:px-[14px] py-[8px] md:py-[10px] border border-[#D5D7DA] rounded-[8px]"
                            >
                                <option>Select your country</option>
                                <option>United States</option>
                                <option>United Kingdom</option>
                                <option>Canada</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-1  ">
                            <label htmlFor="city" className="text-[12px] md:text-[14px] font-[500] text-[#535862]">
                                City
                            </label>
                            <select
                                id="city"
                                className="w-full md:w-[250px] h-[40px] md:h-[44px] px-[12px] md:px-[14px] py-[8px] md:py-[10px] border border-[#D5D7DA] rounded-[8px]"
                            >
                                <option>Select your city</option>
                                <option>New York</option>
                                <option>London</option>
                                <option>Toronto</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1  ">
                        <label htmlFor="password" className="text-[12px] md:text-[14px] font-[500] text-[#535862]">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Create a password"
                            className="w-full md:w-[520px] h-[40px] md:h-[44px] px-[12px] md:px-[14px] py-[8px] md:py-[10px] border border-[#D5D7DA] rounded-[8px]"
                        />
                        <p className="text-[12px] md:text-xs text-gray-500 mt-1">Must be at least 8 characters.</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full md:w-[520px] h-[40px] md:h-[44px] rounded-[8px] bg-[#008A4A] text-[14px] md:text-[16px] font-[600] py-[8px] md:py-[10px] px-[12px] md:px-[16px] text-white"
                    >
                        Get started
                    </button>
                </form>

                {/* Google Signup */}
                <button className="w-full md:w-[520px] h-[40px] md:h-[44px] rounded-[8px] flex items-center justify-center bg-white text-[14px] md:text-[16px] font-[600] mt-4 md:mt-[16px] mb-4 md:mb-[32px] py-[8px] md:py-[10px] px-[12px] md:px-[16px] border border-[#D5D7DA] text-black">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                    Sign up with Google
                </button>

                {/* Login Link */}
                <p className="text-start text-[#535862] text-[12px] md:text-[14px] font-[400] md:ml-[150px]">
                    Already have an account?{' '}
                    <Link to="/signin" className="text-[#008A4A] text-[12px] md:text-[14px] font-[600] hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;