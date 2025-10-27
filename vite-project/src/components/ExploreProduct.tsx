import cameraImage from "../assets/360camera1.webp";
import whiteStar from "../assets/whitesmallStart.svg";
import blackStar from "../assets/SmallblackStar.svg";
import NightVisionCamera from "../assets/Night Vision Camera.webp";
import WebCam from "../assets/web Cam.webp";
import SingleCam from "../assets/Single cam.webp";
import CartIcon from "../assets/cartIcon.svg";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const cameraProducts = [
  {
    id: 1,
    title: "360 Camera",
    subtitle: "Cover every angles",
    image: cameraImage, // replace with your actual image URL
    star: whiteStar,
    buttonText: "Buy",
    detailsText: "More Details",
  },
  {
    id: 2,
    title: "Night Vision",
    subtitle: "Tailored For Night Security",
    image: NightVisionCamera,
    star: blackStar,
    buttonText: "Buy",
    detailsText: "More Details",
  },
  {
    id: 3,
    title: "Single Cam",
    subtitle: "It’s all about the little things that matter!",
    star: whiteStar,
    image: SingleCam,
    buttonText: "Buy",
    detailsText: "More Details",
  },
  {
    id: 4,
    title: "Web Cam",
    subtitle: "Perfect for your laptops and desktops!",
    image: WebCam,
    star: whiteStar,
    buttonText: "Buy",
    detailsText: "More Details",
  },
];

export const ExploreProduct = () => {
  const scrollRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const clientWidth = scrollRef.current.clientWidth;

        // Scroll by 150px every 3 seconds
        scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });

        // Loop back to start when reaching the end
        if (scrollRef.current.scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="flex items-center justify-center w-full h-full lg:h-[580px] flex-wrap ">
        <div className="flex flex-col flex-wrap items-center justify-center w-full px-4 md:px-6 lg:px-20 max-w-7xl mx-auto ">
          <div className="flex items-center justify-center flex-col w-full  ">
            <div className="flex items-end justify-center w-full lg:h-[60px] ">
              <h1 className="font-poppins font-normal text-[25px] lg:text-[30px] leading-[100%] text-center bg-linear-to-r from-[#7d2dff] via-[#5200FF] to-[#0073ff] bg-clip-text text-transparent">
                Explore Products
              </h1>
            </div>
            <div className="flex items-center flex-col justify-center w-full h-[450px] ">
              <div className="flex items-center justify-end w-full px-4 ">
                <div className="flex  justify-center pb-10 w-[127px] h-[22px]">
                  <p className="font-poppins font-normal text-[12px] leading-[140%] tracking-[0px] text-center text-[#E6CCFF]">
                    Latest Cameras
                  </p>
                </div>
              </div>
              <div className="w-full h-[300px] flex flex-row items-center gap-2.5 lg:gap-0">
                {/* Desktop view */}
                <div className="hidden md:grid grid-cols-4 place-items-center justify-between w-full gap-4 lg:gap-0 ">
                  {cameraProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center py-3 px-2 flex-col w-50 h-[300px] rounded-[14px] bg-[#0D0D0D] border"
                    >
                      <div className="flex items-center flex-col w-full h-[300px] gap-3.5">
                        <div
                          className="flex justify-center pb-20 pr-2 items-center w-full h-[130px] rounded-[10px] bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${product.image})`,
                          }}
                        >
                          <div className="flex items-center justify-end w-full">
                            <img
                              src={product.star}
                              alt="Star Icon"
                              className="w-5"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-center w-full h-40">
                          <div className="flex w-full items-center h-[30px]">
                            <p className="font-radio-canada font-bold text-[18px] leading-[130%] tracking-[0%] align-middle text-[#A5AFC4]">
                              {product.title}
                            </p>
                          </div>
                          <div className="flex w-full items-center h-11">
                            <p className="font-poppins font-normal text-[12px] leading-[130%] tracking-[0%] align-middle text-[#667085]">
                              {product.subtitle}
                            </p>
                          </div>
                          <div className="flex items-center justify-end w-full h-4">
                            <p className="font-radio-canada font-bold text-[10px] leading-[130%] tracking-[0%] text-right align-middle text-[#667085]">
                              {product.detailsText}
                            </p>
                          </div>
                          <div className="flex items-center justify-between w-full h-9">
                            <button className="flex items-center justify-center w-[110px] h-[25px] rounded-[100px] bg-[#00AAB5] cursor-pointer">
                              <div className="flex items-center justify-center w-7 h-[19px]">
                                <p className="font-radio-canada font-semibold text-[14px] leading-[100%] tracking-[0%] align-middle text-[#F9F9F9]">
                                  {product.buttonText}
                                </p>
                              </div>
                            </button>
                            <div className="flex items-center justify-around">
                              <img
                                src={CartIcon}
                                alt="Cart Icon"
                                className="w-7"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile view */}
                <div className="w-full h-[300px] md:hidden overflow-x-hidden">
                  <motion.div
                    className="flex gap-2.5 w-max"
                    animate={{ x: ["0%", "-50%"] }} // scroll left by 50%
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20, // adjust speed
                        ease: "linear",
                      },
                    }}
                  >
                    {/* Duplicate the items to make it loop smoothly */}
                    {[...cameraProducts, ...cameraProducts].map(
                      (product, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3.5 flex-col w-50 h-[300px] rounded-[14px] bg-[#0A1E1F] shrink-0"
                        >
                          <div className="flex items-center flex-col w-40 h-[280px] gap-3.5">
                            <div
                              className="flex justify-center pb-20 pr-2 items-center w-full h-[130px] rounded-[10px] bg-cover bg-center"
                              style={{
                                backgroundImage: `url(${product.image})`,
                              }}
                            >
                              <div className="flex items-center justify-end w-full">
                                <img
                                  src={product.star}
                                  alt="Star Icon"
                                  className="w-5"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col justify-center w-full h-40">
                              <div className="flex w-full items-center h-[30px]">
                                <p className="font-radio-canada font-bold text-[18px] leading-[130%] tracking-[0%] align-middle text-[#A5AFC4]">
                                  {product.title}
                                </p>
                              </div>
                              <div className="flex w-full items-center h-11">
                                <p className="font-poppins font-normal text-[12px] leading-[130%] tracking-[0%] align-middle text-[#667085]">
                                  {product.subtitle}
                                </p>
                              </div>
                              <div className="flex items-center justify-end w-full h-4">
                                <p className="font-radio-canada font-bold text-[10px] leading-[130%] tracking-[0%] text-right align-middle text-[#667085]">
                                  {product.detailsText}
                                </p>
                              </div>
                              <div className="flex items-center justify-between w-full h-9">
                                <button className="flex items-center justify-center w-[110px] h-[25px] rounded-[100px] bg-[#00AAB5] cursor-pointer">
                                  <div className="flex items-center justify-center w-7 h-[19px]">
                                    <p className="font-radio-canada font-semibold text-[14px] leading-[100%] tracking-[0%] align-middle text-[#F9F9F9]">
                                      {product.buttonText}
                                    </p>
                                  </div>
                                </button>
                                <div className="flex items-center justify-around">
                                  <img
                                    src={CartIcon}
                                    alt="Cart Icon"
                                    className="w-7"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
