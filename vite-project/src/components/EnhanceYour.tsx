import cameraImage from "../assets/Cameraenquary.webp";
export const EnhanceYour = () => {
  return (
    <>
      <div className="flex  flex-wrap lg:items-center justify-center h-96  w-full  ">
        <div className="flex flex-wrap lg:items-center justify-center w-full px-4 md:px-6 lg:px-10 mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center w-full lg:w-[860px] h-auto lg:h-[300px] rounded-[22px] bg-linear-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] p-4">
            {/* Image Section */}
            <div className="flex items-center justify-center w-full h-[200px]  lg:w-[280px] mb-4 lg:mb-0 ">
              <img
                src={cameraImage}
                alt="Camera Image"
                className=" object-contain"
              />
            </div>

            {/* Text + Buttons Section */}
            <div className="flex flex-col items-center justify-center w-full lg:w-[500px] text-center">
              <h2 className="font-radio-canada font-normal text-[14px] lg:text-[16px] leading-5 lg:leading-6 text-white tracking-[0%] mb-4">
                Enhance Your Organization's Security <br /> with Extra Eye
              </h2>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                <button className="flex items-center justify-center px-2 w-[250px] h-[35px] rounded-[20px] bg-linear-to-r from-[#8213ae] via-[#6200ff] to-[#34bbf0] cursor-pointer">
                  <p className="font-montserrat font-normal text-[12.41px] text-white">
                    Contact Number
                  </p>
                </button>
                <button className="flex items-center justify-center w-[100px] h-[35px] rounded-[100px] bg-[#000423] cursor-pointer">
                  <p className="font-kulim-park font-semibold text-[12px] text-white">
                    Enquiry
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
