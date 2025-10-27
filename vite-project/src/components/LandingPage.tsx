import { useState } from "react";
import bgImage from "../assets/bgImage.webp";
import arrow from "../assets/arrow.svg";

export const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [swiped, setSwiped] = useState(false);

  return (
    <>
      <div
        className="relative flex flex-col  w-full min-h-screen bg-center bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex  px-4 md:px-6 lg:px-10 max-w-7xl mx-auto w-full  lg:mt-10 p-10 lg:p-0 ">
          <nav className="flex items-center justify-between lg:h-[72px] w-full  relative  lg:pr-30  ">
            <div className="flex items-center justify-center lg:w-52 lg:h-[60px] lg:ml-50">
              <h1 className="font-poppins font-normal text-[28px] sm:text-[32px] lg:text-[40px] uppercase text-[#F9F9F9]">
                Sacrosys
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-center gap-4 flex-row lg:w-[430px] lg:h-[62px] rounded-xl bg-[#B4FFD73D]">
              <p className="font-poppins font-normal text-[16px] lg:text-[18px] leading-[100%] text-white">
                Products
              </p>
              <p className="font-poppins font-normal text-[16px] lg:text-[18px] leading-[100%] text-[#B5B5B5]">
                Service
              </p>
              <p className="font-poppins font-normal text-[16px] lg:text-[18px] leading-[100%] text-[#B5B5B5]">
                About
              </p>
              <p className="font-poppins font-normal text-[16px] lg:text-[18px] leading-[100%] text-[#B5B5B5]">
                Help
              </p>
              <button className="lg:w-[98px] sm:w-20 lg:h-[51px] sm:h-10 flex items-center justify-center p-2 lg:p-3 gap-2 lg:gap-2.5 bg-[#00B597] rounded-xl cursor-pointer hover:bg-green-800">
                <p className="font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[100%] text-white">
                  Contact
                </p>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center ">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex flex-col justify-between w-8 h-6 focus:outline-none"
              >
                <span className="block h-1 w-full bg-white rounded"></span>
                <span className="block h-1 w-full bg-white rounded"></span>
                <span className="block h-1 w-full bg-white rounded"></span>
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
              <div
                className="fixed inset-0 z-40"
                onClick={() => setMobileMenuOpen(false)}
              />
            )}

            {/* Mobile Menu */}
            <div
              className={`fixed top-0 right-0 h-[400px] w-64 bg-[#B4FFD73D] backdrop-blur-md p-4 flex flex-col z-50 transition-transform duration-300 lg:hidden ${
                mobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Menu Items */}
              <div className="flex flex-col gap-4">
                {["Products", "Service", "About", "Help"].map((item) => (
                  <p
                    key={item}
                    className="font-poppins font-normal text-[16px] sm:text-[18px] cursor-pointer text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </p>
                ))}
              </div>

              {/* Contact Button at Bottom */}
              <button
                className="mt-auto w-full flex items-center justify-center p-2 sm:p-3 gap-2 sm:gap-4 bg-[#00B597] rounded-xl cursor-pointer hover:bg-green-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                <p className="font-poppins font-normal text-[14px] sm:text-[16px] text-white">
                  Contact
                </p>
              </button>
            </div>
          </nav>
        </div>

        <div className="flex items-center justify-center gap-6 sm:gap-8 w-full max-w-7xl px-2 sm:px-6 lg:px-10 mx-auto flex-col lg:mt-0  ">
          {/* Navigation */}

          {/* Hero Section */}
          <div className="flex items-center lg:py-20 flex-col w-full lg:w-[774px] lg:h-[273px] gap-4 sm:gap-4">
            <div className="lg:w-[774px] lg:h-[180px] px-5 lg:px-0 ">
              <h1 className="font-poppins font-bold text-[15px] sm:text-[28px] lg:text-[30px] capitalize tracking-widest leading-6 sm:leading-10 lg:leading-9">
                <span className="text-gradient leading-[100%]">
                  Comprehensive{" "}
                </span>
                <span className="text-[#08F7C3] leading-[100%]">
                  CCTV and <br />
                  Network Solutions Tailored for <br />
                </span>
                <span className="text-gradient-alt leading-[100%]">
                  Every Organization
                </span>
              </h1>
            </div>

            <div className="flex w-full lg:w-[774px] h-auto gap-1 sm:gap-1 flex-col px-5 lg:px-0">
              <p className="font-poppins  font-normal text-[11px] sm:text-[14px] lg:text-[14px] capitalize text-[#F9F9F9] tracking-widest ">
                The top CCTV and networking solutions in Dubai are essential for
                any <br /> business owner to consider for their security.
              </p>
              <div
                className="lg:w-[589px] w-full border border-transparent"
                style={{
                  borderImageSlice: 1,
                  borderImageSource:
                    "linear-gradient(267.03deg, #006233 4.01%, #00FFD5 57.55%, #2DFF53 114.97%)",
                  opacity: 1,
                }}
              ></div>
            </div>

            <div className="flex items-center justify-center w-full lg:w-[439px] lg:h-20  p-4 sm:p-6 gap-4 sm:gap-3 rounded-[100px] flex-row bg-[#083F31] border border-[#3461FF]  absolute bottom-4 lg:bottom-10 ">
              <div className="flex flex-row w-full lg:w-[591px] lg:h-[60px] items-center justify-end rounded-[52px]  p-1.5 sm:p-2 gap-4 sm:gap-2.5 bg-[#BEF1C9] relative overflow-hidden ">
                {/* Arrow + Button wrapper */}
                <div className="relative flex items-center w-full h-[50px] lg:w-[591px] lg:h-[73px] rounded-[52px] p-1.5 sm:p-2 bg-[#BEF1C9] overflow-hidden ">
                  <div
                    className={
                      "flex items-center justify-center gap-3 absolute transition-transform duration-700 ease-in-out " +
                      (swiped
                        ? // moved to RIGHT edge (same for all sizes)
                          "translate-x-[calc(100%-230px)] flex-row-reverse"
                        : // default left offset: 120px on mobile, 140px on lg+
                          "translate-x-25  xs:translate-x-20 lg:translate-x-36 flex-row")
                    }
                  >
                    <img
                      src={arrow}
                      alt="arrow"
                      className={`w-[30px] h-[30px] transition-transform duration-700 ${
                        swiped ? "rotate-180" : "rotate-0"
                      }`}
                    />

                    <button
                      onClick={() => setSwiped(!swiped)}
                      className="flex items-center justify-center w-[180px] h-[50px] sm:h-[50px] rounded-[30px] p-2 sm:p-3 gap-4 sm:gap-2.5 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #08F7B7 0%, #004F1A 100%)",
                      }}
                    >
                      <p className="text-[#F9F9F9] font-radio-canada font-semibold text-[12px] sm:text-[16px] leading-[100%] tracking-[0] align-middle">
                        Swipe to Switch
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
