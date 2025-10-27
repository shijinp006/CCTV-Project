import { useState } from "react";
import bgImage from "../assets/bgImage.webp";
import { motion } from "framer-motion";
import arrow from "../assets/arrow.svg";

export const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [swiped, setSwiped] = useState(false);
  const [lightPosition, setLightPosition] = useState({ x: 50, y: 50 });
  const text = "Sacrosys";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    setLightPosition({ x, y });
  };

  return (
    <>
      {/* Main Container */}
      <motion.div
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center w-full min-h-screen bg-center bg-cover transition-all duration-300"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundColor: "#00000080",
          backgroundPosition: "center",
          backgroundSize: "cover",
          boxShadow: `inset 0 0 100px rgba(0,0,0,0.5)`,
        }}
      >
        {/* Moving Light Effect */}
        <motion.div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${lightPosition.x}% ${lightPosition.y}%, rgba(0,255,180,0.25), transparent 60%)`,
            pointerEvents: "none",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Navigation */}

        <nav className="flex  justify-between lg:h-[72px] w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-20 mt-5 lg:mt-10 ">
          {/* Logo */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center lg:w-52 lg:h-[60px] "
          >
            <h1 className="font-poppins font-normal text-[28px] sm:text-[32px] lg:text-[40px] uppercase text-[#F9F9F9] ">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center gap-4 flex-row lg:w-[430px] lg:h-[62px] rounded-xl bg-[#B4FFD73D]">
            <motion.p
              whileHover={{ rotateX: 360, color: "#00FFD5" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[100%] text-white cursor-pointer"
            >
              Products
            </motion.p>

            <motion.p
              whileHover={{ rotateX: 360, color: "#ffffff" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[100%] text-[#B5B5B5] cursor-pointer"
            >
              Service
            </motion.p>

            <motion.p
              whileHover={{ rotateX: 360, color: "#ffffff" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[100%] text-[#B5B5B5] cursor-pointer"
            >
              About
            </motion.p>

            <motion.p
              whileHover={{ rotateX: 360, color: "#ffffff" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[100%] text-[#B5B5B5] cursor-pointer"
            >
              Help
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="lg:w-[98px] sm:w-20 lg:h-[51px] sm:h-10 flex items-center justify-center p-2 lg:p-3 gap-2 lg:gap-2.5 bg-[#00B597] rounded-xl cursor-pointer hover:bg-green-800"
            >
              <p className="font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[16px] leading-[100%] text-white">
                Contact
              </p>
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
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
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: mobileMenuOpen ? 0 : "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed top-0 right-0 h-[400px] w-64 bg-[#B4FFD73D] backdrop-blur-md p-4 flex flex-col z-50 md:hidden`}
          >
            <div className="flex flex-col gap-4">
              {["Products", "Service", "About", "Help"].map((item) => (
                <motion.p
                  key={item}
                  whileHover={{ scale: 1.05, color: "#00FFD5" }}
                  className="font-poppins font-normal text-[16px] sm:text-[18px] cursor-pointer text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.p>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="mt-auto w-full flex items-center justify-center p-2 sm:p-3 gap-2 sm:gap-4 bg-[#00B597] rounded-xl cursor-pointer hover:bg-green-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="font-poppins font-normal text-[14px] sm:text-[16px] text-white">
                Contact
              </p>
            </motion.button>
          </motion.div>
        </nav>

        {/* Hero Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex  justify-center gap-6 sm:gap-8 w-full max-w-7xl px-4 sm:px-6 lg:px-20 mx-auto flex-col mt-10 lg:mt-0  "
        >
          <div className="flex items-center lg:py-20 flex-col w-full lg:w-[774px] lg:h-[273px] gap-4 sm:gap-4 ">
            <div className="lg:w-[774px] lg:h-[180px] px-5 lg:px-0">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex w-full lg:w-[774px] h-auto gap-1 sm:gap-1 flex-col px-8 lg:px-0"
            >
              <p className="font-poppins font-normal text-[11px] sm:text-[14px] lg:text-[14px] capitalize text-[#F9F9F9] tracking-widest">
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
            </motion.div>

            {/* Swipe Button */}
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center w-full lg:w-[439px] lg:h-25  p-4 sm:p-6 gap-4 sm:gap-3 rounded-[100px] flex-row bg-[#083F31] border border-[#3461FF]  absolute bottom-4 lg:bottom-10 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
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
                <motion.img
                  src={arrow}
                  alt="arrow"
                  className={`w-[30px] h-[30px] transition-transform duration-700 ${
                    swiped ? "rotate-180" : "rotate-0"
                  }`}
                />

                <motion.button
                  onClick={() => setSwiped(!swiped)}
                  className="flex items-center justify-center w-[180px] h-[50px] sm:h-[50px] rounded-[30px] p-2 sm:p-3 gap-4 sm:gap-2.5 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(90deg, #08F7B7 0%, #004F1A 100%)",
                  }}
                >
                  <p className="text-[#F9F9F9] font-radio-canada font-semibold text-[12px] sm:text-[16px] leading-[100%] tracking-[0] align-middle ">
                    Swipe to Switch
                  </p>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
