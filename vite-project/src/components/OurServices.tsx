import RoundWithArrow from "../assets/roundwitharrow.svg";
import RoundArrow from "../assets/roundwithArrow2.svg";
import { ServicesSection } from "./ServicesSection";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

export const OurServices = () => {
  const [service, setService] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (title: any) => {
    if (openDropdown === title) {
      setOpenDropdown(null); // close if already open
      setService("");
    } else {
      setOpenDropdown(title); // open the selected one
      setService(title);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full flex-wrap py-20 lg:py-0">
        <div className="flex flex-wrap items-center justify-center w-full px-4 md:px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center w-full ">
            {/* Header Section */}
            <div className="flex flex-col items-center w-full  h-auto lg:h-[83px] text-center">
              <div className="flex justify-center w-full h-5 mb-2">
                <div className="flex items-center justify-center w-[100px] h-[22px]">
                  <p className="font-radio-canada font-normal text-[12px] text-[#9C9C9C]">
                    Our Services
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center w-full h-auto lg:h-20 px-2">
                <div className="flex justify-center w-full ">
                  <p className="font-radio-canada font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-8 text-white text-center">
                    Your Aspiration, Our Expertise: Tailored Services for
                    <br className="hidden sm:block" />
                    Unmatched Excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Section */}
            <div className="flex flex-col items-center w-full  lg:mt-10 mt-6 ">
              {/* Service Row 1 */}
              <div className="flex flex-col items-center justify-center w-full">
                {/* Dropdown header */}
                <div className="flex items-center justify-between w-full h-auto p-3 lg:px-10 gap-2 border-b border-[#2A2840]">
                  {/* Left section (Number + Title) */}
                  <div className="flex items-center justify-between w-[200px] lg:w-[265px]">
                    <p className="font-raleway font-normal text-[14px] lg:text-[18px] text-white">
                      01
                    </p>
                    <h2 className="font-raleway font-normal text-[18px] sm:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#595858] to-[#595858]">
                      Entreprise Service
                    </h2>
                  </div>

                  {/* Arrow Icon */}
                  <img
                    src={
                      openDropdown === "Entreprise Service"
                        ? RoundArrow
                        : RoundWithArrow
                    }
                    alt="Arrow Icon"
                    className="w-[25px] sm:w-[30px] cursor-pointer transition-transform duration-300"
                    onClick={() => toggleDropdown("Entreprise Service")}
                  />
                </div>

                {/* Dropdown content */}
                <AnimatePresence>
                  {openDropdown === "Entreprise Service" && (
                    <motion.div
                      className="w-full mt-4"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 20 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        duration: 0.5,
                      }}
                    >
                      <ServicesSection service={service} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Divider */}
              <div
                className="w-full  h-0 opacity-100"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF) 1",
                }}
              />

              {/* Service Row 2 */}
              <div className="flex flex-col items-center w-full mt-4">
                <div className="flex flex-col items-center justify-center w-full">
                  {/* Dropdown header */}
                  <div className="flex items-center justify-between w-full h-auto p-3 lg:px-10 gap-2 ">
                    {/* Left section (Number + Title) */}
                    <div className="flex items-center justify-between w-[194px] lg:w-[257px]  ">
                      <p className="font-raleway font-normal text-[14px] lg:text-[18px] text-white">
                        02
                      </p>
                      <h2 className="font-raleway font-normal text-[18px] sm:text-[20px] text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] via-[#595858] to-[#595858]">
                        Expertise Service
                      </h2>
                    </div>

                    {/* Arrow Icon */}
                    <img
                      src={
                        openDropdown === "Expertise Service"
                          ? RoundArrow
                          : RoundWithArrow
                      }
                      alt="Arrow Icon"
                      className={`w-[25px] sm:w-[30px] cursor-pointer transition-transform duration-300 $   
                      `}
                      onClick={() => toggleDropdown("Expertise Service")}
                    />
                  </div>

                  {/* Dropdown content */}
                  <AnimatePresence>
                    {openDropdown === "Expertise Service" && (
                      <motion.div
                        className="w-full mt-4"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                          duration: 0.5,
                        }}
                      >
                        <ServicesSection service={service} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Divider */}
              <div
                className="w-full  h-0 opacity-100  "
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF) 1",
                }}
              />

              {/* Service Row 3 */}
              <div className="flex flex-col items-center justify-center w-full mt-4">
                {/* Dropdown header */}
                <div className="flex items-center justify-between w-full h-auto p-3 lg:px-10 gap-2 border-b border-[#2A2840]">
                  {/* Left section (Number + Title) */}
                  <div className="flex items-center justify-between w-[120px] lg:w-[166px]  ">
                    <p className="font-raleway font-normal text-[14px] lg:text-[18px] text-white">
                      03
                    </p>
                    <h2 className="font-raleway font-normal text-[18px] sm:text-[20px] text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] via-[#595858] to-[#595858]">
                      Process
                    </h2>
                  </div>

                  {/* Arrow Icon */}
                  <img
                    src={
                      openDropdown === "Process" ? RoundArrow : RoundWithArrow
                    }
                    alt="Arrow Icon"
                    className={`w-[25px] sm:w-[30px] cursor-pointer transition-transform duration-300 
                `}
                    onClick={() => toggleDropdown("Process")}
                  />
                </div>

                {/* Dropdown content */}
                <AnimatePresence>
                  {openDropdown === "Process" && (
                    <motion.div
                      className="w-full mt-4"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 20 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        duration: 0.5,
                      }}
                    >
                      <ServicesSection service={service} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Divider */}
              <div
                className="w-full  h-0 opacity-100"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF) 1",
                }}
              />

              {/* Service Row 4 */}
              <div className="flex flex-col items-center justify-center w-full mt-4">
                {/* Dropdown header */}
                <div className="flex items-center justify-between w-full h-auto p-3 lg:px-10 gap-2 ">
                  {/* Left section (Number + Title) */}
                  <div className="flex items-center justify-between w-[253px] lg:w-[315px] lg:pl-2 ">
                    <p className="font-raleway font-normal text-[14px] lg:text-[18px] text-white">
                      04
                    </p>
                    <h2 className="font-raleway font-normal text-[18px] sm:text-[20px] text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] via-[#595858] to-[#595858]">
                      Mobile App Development
                    </h2>
                  </div>

                  {/* Arrow Icon */}
                  <img
                    src={
                      openDropdown === "Mobile App Development"
                        ? RoundArrow
                        : RoundWithArrow
                    }
                    alt="Arrow Icon"
                    className={`w-[25px] sm:w-[30px] cursor-pointer transition-transform duration-300 
                   `}
                    onClick={() => toggleDropdown("Mobile App Development")}
                  />
                </div>

                {/* Dropdown content */}
                <AnimatePresence>
                  {openDropdown === "Mobile App Development" && (
                    <motion.div
                      className="w-full mt-4"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 20 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        duration: 0.5,
                      }}
                    >
                      <ServicesSection service={service} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
