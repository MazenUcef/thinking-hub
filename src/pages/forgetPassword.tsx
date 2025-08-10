import AuthImg from '../assets/images/authImg.png';

const ForgetPassword = () => {
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
            <div className="w-full md:w-1/2 flex-1 p-4 md:p-8 md:mt-[237px] md:mx-[100px] overflow-y-auto">
                <h2 className="text-[24px] md:text-[30px] font-[700] mb-2 md:mb-4">Forgot password?</h2>
                <p className="text-[14px] md:text-[16px] font-[400] text-[#535862] mb-4 md:mb-[32px]">
                    Enter your email, and we’ll send you a reset link.
                </p>

                {/* Form */}
                <form className="flex flex-col gap-4 md:gap-[22px]">
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
                    <button
                        type="submit"
                        className="w-full md:w-[520px] h-[40px] md:h-[44px] rounded-[8px] bg-[#008A4A] text-[14px] md:text-[16px] font-[600] py-[8px] md:py-[10px] px-[12px] md:px-[16px] text-white"
                    >
                        Reset password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;