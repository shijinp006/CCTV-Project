import rightArrow from "../assets/rightarrow.svg";
import Star from "../assets/star.svg";
import FeatureImage from "../assets/FeatureImage.webp";
export const NewFeature = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full  flex-wrap lg:py-0 py-10  ">
        <div className="flex items-center justify-center w-full max-w-7xl px-4 md:px-6 lg:px-10 mx-auto flex-col flex-wrap">
          <div className="flex flex-row items-center justify-center w-full lg:h-[400px]  flex-wrap ">
            <div className="flex items-center flex-col  w-full lg:w-[460px] h-[335px] gap-3 flex-wrap  ">
              <div className="flex flex-row flex-wrap w-full h-[79px] items-center justify-center   ">
                <div className="flex items-center justify-center w-full h-[34px] ">
                  <h1
                    className="font-radio-canada font-normal text-[22px] leading-[100%] text-center 
        bg-linear-to-r from-[#ff00dd] via-[#5200FF] to-[#2dbcff]
        bg-clip-text text-transparent"
                  >
                    New Features Galore
                  </h1>
                </div>
                <div className="flex w-[220px] h-[29px]  text-start">
                  <h2 className="font-radio-canada font-normal text-[16px] leading-[100%] tracking-[0] text-white text-start">
                    Enhanced Performance
                  </h2>
                </div>
              </div>
              <div className="flex items-center w-full h-[100px]  lg:px-11">
                <p className="font-poppins font-normal text-[10px] lg:text-[13px] lg:leading-5 text-white max-w-2xl text-start">
                  Experience our latest camera model with a<br />
                  plethora of new features that will elevate your
                  <br />
                  photography game. Enjoy enhanced
                  <br />
                  performance and unlock a world of creative
                  <br />
                  possibilities at your fingertips.
                </p>
              </div>
              <div className="flex flex-col w-[280px] lg:w-full lg:h-10 gap-0.5  justify-center items-center ">
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
            <div
              className="flex items-center justify-center w-full h-[330px] lg:w-[300px] lg:h-[330px] rounded-[10px] lg:rounded-[20px]  "
              style={{
                backgroundImage: `url(${FeatureImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
