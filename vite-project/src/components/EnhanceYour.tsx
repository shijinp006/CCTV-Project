import cameraImage from "../assets/Cameraenquary.webp";
export const EnhanceYour = () => {
  return (
    <>
      <div className="flex  flex-wrap lg:items-center justify-center h-96  w-full  ">
        <div className="flex flex-wrap lg:items-center justify-center w-full px-4 md:px-6 lg:px-10 mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center flex-row w-full lg:w-[860px] h-[300px] rounded-[22px]  bg-linear-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF]">
            <div className="flex items-center justify-center h-full w-[280px]">
              <img src={cameraImage} alt="Camera Image" />
            </div>
            <div className="flex flex-col items-center justify-center h-[130px] w-full lg:w-[500px]">
              <div className="flex w-full lg:w-[400px] h-[50px] lg:px-0 px-5 py-3 lg:py-0">
                <h2 className="font-radio-canada font-normal text-[12px] lg:text-[16px] leading-4 lg:leading-[100%] text-white tracking-[0%]">
                  Enhance Your Organization's Security <br /> with Extra Eye
                </h2>
              </div>
              <div className="flex items-center lg:px-12 w-full h-[45px] gap-4  ">
                <button className="flex px-2 items-center justify-center w-[250px] h-[35px] rounded-[20px] bg-linear-to-r from-[#8213ae] via-[#6200ff] to-[#34bbf0] cursor-pointer">
                  <div className="flex items-center w-[200px] h-5 ">
                    <p className="font-montserrat font-normal text-[12.41px] leading-[100%] tracking-[0%] text-white">
                      Contact Number
                    </p>
                  </div>
                </button>
                <button className="flex items-center justify-center w-20 h-8 rounded-[100px] bg-[#000423] cursor-pointer">
                  <div className="flex items-center justify-center w-full h-5">
                    <p className="font-kulim-park font-semibold text-[12px] leading-[100%] tracking-[0%] text-white align-middle">
                      Enquiry
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
