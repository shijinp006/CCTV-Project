import camera from "../assets/360camera.webp";
import Star from "../assets/star.svg";
import rightArrow from "../assets/rightarrow.svg";
export const SpreadTheView = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full  flex-wrap lg:py-0 py-10  ">
        <div className="flex items-center justify-center w-full max-w-7xl px-4 md:px-6 lg:px-20 mx-auto flex-col flex-wrap ">
          <div className="flex flex-row items-center justify-between  w-full lg:h-[400px] gap-5 flex-wrap   lg:mt-15  ">
            <div
              className="flex items-center justify-center w-full h-[330px] lg:w-[480px] lg:h-[400px] rounded-[10px] lg:rounded-[20px]"
              style={{
                backgroundImage: `url(${camera})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flex items-center  flex-col w-full lg:w-[480px] lg:h-[400px] flex-wrap  gap-3  lg:mr-20  ">
              <div className="flex flex-col lg:w-[300px] lg:h-[70px] ">
                <div className="w-full lg:h-7  ">
                  <h1
                    className="
        font-radio-canada font-normal text-[25px] leading-[100%] text-center
        bg-linear-to-r from-[#ff00dd] via-[#5200FF] to-[#2dbcff]
        bg-clip-text text-transparent
      "
                  >
                    360 degree Special
                  </h1>
                </div>
                <div className="flex items-center  lg:w-[300px] lg: h-[29px] px-10  ">
                  <h2
                    className="
        font-radio-canada font-normal text-[16px] leading-[100%] text-white text-start
        tracking-[0em]
      "
                  >
                    Spread the View
                  </h2>
                </div>
              </div>
              <div className="flex w-full lg:h-[95px]  lg:px-10 ">
                <p className="font-poppins font-normal ml-10 lg:ml-0 text-[10px] lg:text-[13px] lg:leading-[18px] text-white max-w-2xl text-start ">
                  Discover the amazing world of 360 cameras! These cool  <br />{" "}
                  devices boost your creativity and help you save money. <br />{" "}
                  With two camera views, you can capture every angle and <br />{" "}
                  detail, making it easy to share breath-taking panoramic <br />{" "}
                  moments.
                </p>
              </div>
              <div className="flex flex-col w-[280px] lg:w-full lg:h-10 gap-0.5  justify-center items-center  ">
                <div className="w-full  h-5 p-[5px] gap-[5px] ">
                  <div className="w-[280px]  lg:w-[540px]  opacity-100 gradient-border"></div>
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
