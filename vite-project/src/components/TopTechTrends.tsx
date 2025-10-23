import ToptechImage from "../assets/TopTechImage.webp";
import Star from "../assets/star.svg";
import rightArrow from "../assets/rightarrow.svg";
export const TopTechTrend = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full  flex-wrap lg:py-0 py-10 ">
        <div className="flex items-center justify-center w-full max-w-7xl px-4 md:px-6 lg:px-10 mx-auto flex-col flex-wrap ">
          <div className="flex flex-row items-center justify-center w-full lg:h-[400px] gap-5 flex-wrap ">
            <div
              className="flex items-center justify-center w-full h-[330px] lg:w-[300px] lg:h-[330px] rounded-[10px] lg:rounded-[20px]  "
              style={{
                backgroundImage: `url(${ToptechImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flex items-center  flex-col w-full lg:w-[380px] lg:h-[300px] flex-wrap  gap-3 lg:mb-10   ">
              <div className="flex flex-col lg:w-[200px] lg:h-[70px] ">
                <div className="w-full lg:h-7  ">
                  <h1
                    className="
        font-radio-canada font-normal text-[22px] leading-[100%] text-center
        bg-linear-to-r from-[#ff00dd] via-[#5200FF] to-[#2dbcff]
        bg-clip-text text-transparent
      "
                  >
                    Top Tech Trends
                  </h1>
                </div>
                <div className="flex items-center  lg:w-[200px] lg: h-[29px]  lg:px-5">
                  <h2
                    className="
        font-radio-canada font-normal text-[16px] leading-[100%] text-white text-start
        tracking-[0em]
      "
                  >
                    Innovative Designs
                  </h2>
                </div>
              </div>
              <div className="flex  w-full lg:h-[95px]  lg:ml-10 ">
                <p className="font-poppins ml-10 lg:ml-0 font-normal text-[10px] lg:text-[13px] lg:leading-[18px] text-white max-w-2xl text-start">
                  Stay ahead of the curve with our top tech trends in <br />{" "}
                  camera technology. Our innovative designs combine <br /> style
                  and function, ensuring you always capture the <br /> perfect
                  shot with ease.
                </p>
              </div>
              <div className="flex flex-col w-[280px] lg:w-full lg:h-10 gap-0.5  justify-center items-center  ">
                <div className="w-full lg:w-[400px] h-5 p-[5px] gap-[5px] ">
                  <div className="w-[280px]  lg:w-full  opacity-100 gradient-border"></div>
                </div>
                <div className="flex flex-row items-center justify-center w-[100px] h-5 gap-2  ">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <img key={idx} src={Star} alt={`Star ${idx + 1}`} />
                  ))}
                </div>
              </div>
              <button className="relative w-[165px] h-[30px] rounded-[18px] p-[0.78px] bg-linear-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] cursor-pointer ">
                <div className="flex flex-row px-4 items-center justify-between w-full h-full rounded-[17.22px] bg-[#04231F]">
                  <span className="text-white font-radio-canada text-sm">
                    Learn more
                  </span>
                  <div className="flex items-center justify-center">
                    <img src={rightArrow} alt="Arrow" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
