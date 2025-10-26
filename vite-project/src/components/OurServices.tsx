import RoundWithArrow from "../assets/roundwitharrow.svg";
import RoundArrow from "../assets/roundwithArrow2.svg";
import { items } from "../Items";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const OurServices = () => {
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 5 seconds (only on mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 1024) {
        setCurrent((prev) => (prev + 1) % items.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full flex-wrap py-20 lg:py-0">
        <div className="flex flex-wrap items-center justify-center w-full px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center w-full lg:w-[860px]">
            {/* Header Section */}
            <div className="flex flex-col items-center w-full lg:w-[800px] h-auto lg:h-[83px] text-center">
              <div className="flex justify-center w-full h-5 mb-2">
                <div className="flex items-center justify-center w-[100px] h-[22px]">
                  <p className="font-radio-canada font-normal text-[12px] text-[#9C9C9C]">
                    Our Services
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center w-full h-auto lg:h-20 px-2">
                <div className="flex justify-center w-full lg:w-[630px]">
                  <p className="font-radio-canada font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-8 text-white text-center">
                    Your Aspiration, Our Expertise: Tailored Services for
                    <br className="hidden sm:block" />
                    Unmatched Excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Section */}
            <div className="flex flex-col items-center w-full lg:w-[800px] lg:mt-10 mt-6">
              {/* Service Row 1 */}
              <div className="flex flex-row items-center justify-between w-full lg:w-[720px] h-auto p-3 lg:px-10 lg:pr-20 lg:gap-2   ">
                <div className="flex flex-row items-center justify-between w-[200px] lg:w-[265px]  ">
                  <p className="font-raleway font-normal text-[14px] lg:text-[18px] text-white">
                    01
                  </p>
                  <h2 className="font-raleway font-normal text-[18px] sm:text-[20px] text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] via-[#595858] to-[#595858] text-center">
                    Entreprise Service
                  </h2>
                </div>
                <img
                  src={RoundWithArrow}
                  alt="Arrow Icon"
                  className="w-[25px] sm:w-[30px]"
                />
              </div>

              {/* Divider */}
              <div
                className="w-full lg:w-[680px] h-0 opacity-100"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF) 1",
                }}
              />

              {/* Service Row 2 */}
              <div className="flex flex-col items-center w-full mt-4">
                <div className="flex flex-row items-center justify-between w-full lg:w-[720px] p-3 lg:px-10 lg:pr-20 gap-2">
                  <div className="flex flex-row items-center justify-between  w-[193px] lg:w-[260px]  ">
                    <p className="font-raleway font-normal text-[16px] sm:text-[18px] text-white">
                      02
                    </p>
                    <h2 className="font-raleway font-normal text-[18px] sm:text-[20px] text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] via-[#595858] to-[#595858] text-center">
                      Expertise Service
                    </h2>
                  </div>
                  <img
                    src={RoundArrow}
                    alt="Arrow Icon"
                    className="w-[25px] sm:w-[30px]"
                  />
                </div>

                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 w-full px-4 lg:px-20">
                  <div className="hidden lg:block w-px h-14 bg-[#9C9C9C] opacity-100 my-2"></div>

                  <p className="font-raleway font-normal text-[13px] leading-6 text-[#9C9C9C]  sm:text-left w-full sm:w-[590px]">
                    Lorem ipsum dolor sit amet consectetur. Eu amet posuere
                    consequat donec suspendisse <br /> lorem enim. Elit viverra
                    nisl non nisl eleifend. Cursus erat mattis fames et mollis
                    risus at.
                  </p>
                </div>

                {/* Image cards */}
                <div className="flex flex-wrap justify-center w-full gap-4 mt-6">
                  {/*mobile View */}
                  <div className="block lg:hidden relative w-full overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="relative flex items-center justify-center h-[180px] w-full rounded-lg overflow-hidden"
                        style={{
                          backgroundImage: `url(${items[current].image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        {/* Dark overlay */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0"
                          style={{ background: "rgba(0,0,0,0.55)" }}
                        />

                        {/* Text */}
                        <div className="relative z-10 flex items-center justify-center w-full h-[25px]">
                          <h2
                            className="font-raleway text-[16px] text-center"
                            style={{
                              color: "#FFFFFF",
                              textShadow:
                                "0 2px 6px rgba(0,0,0,0.6), 0 0 8px rgba(255,255,255,0.08)",
                            }}
                          >
                            {items[current].category}
                          </h2>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {items.map((item, index) => (
                    <div
                      key={index}
                      className=" relative  hidden lg:flex items-center justify-center h-[140px] lg:h-40 w-[140px] sm:w-[180px] lg:w-[200px] rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: "rgba(0,0,0,0.55)",
                        }}
                      />
                      <div className="relative z-10 flex items-center justify-center w-full h-[25px]">
                        <h2
                          className="font-raleway text-[14px] sm:text-[15px] text-center"
                          style={{
                            color: "#FFFFFF",
                            textShadow:
                              "0 2px 6px rgba(0,0,0,0.6), 0 0 8px rgba(255,255,255,0.08)",
                          }}
                        >
                          {item.category}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div
                className="w-full lg:w-[680px] h-0 opacity-100 mt-6 lg:mt-10"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF) 1",
                }}
              />

              {/* Service Row 3 */}
              <div className="flex flex-row items-center justify-between w-full lg:w-[720px] h-auto p-3 lg:px-10 lg:pr-20 gap-2 mt-4">
                <div className="flex flex-row items-center justify-between  w-[115px] lg:w-[180px]  ">
                  <p className="font-raleway font-normal text-[16px] sm:text-[18px] text-white">
                    03
                  </p>
                  <h2 className="font-raleway font-normal text-[18px] sm:text-[20px] text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] via-[#595858] to-[#595858] text-center">
                    Process
                  </h2>
                </div>
                <img
                  src={RoundWithArrow}
                  alt="Arrow Icon"
                  className="w-[25px] sm:w-[30px]"
                />
              </div>

              {/* Divider */}
              <div
                className="w-full lg:w-[680px] h-0 opacity-100"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF) 1",
                }}
              />

              {/* Service Row 4 */}
              <div className="flex flex-row items-center justify-between w-full lg:w-[720px] h-auto p-3 lg:px-10 gap-2 lg:pr-20 mt-4">
                <div className="flex flex-row items-center justify-between  w-[250px] lg:w-[325px]  ">
                  <p className="font-raleway font-normal text-[16px] sm:text-[18px] text-white">
                    04
                  </p>
                  <h2 className="font-raleway font-normal text-[18px] sm:text-[20px] text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] via-[#595858] to-[#595858] text-center">
                    Mobile App Development
                  </h2>
                </div>
                <img
                  src={RoundWithArrow}
                  alt="Arrow Icon"
                  className="w-[25px] sm:w-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
