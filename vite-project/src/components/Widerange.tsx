import broadbandImage from "../assets/broadband.svg";
import telePhone from "../assets/telephone.svg";
import cctv from "../assets/cctv.svg";
export const WideRange = () => {
  const services = [
    {
      category: "BROADBAND",
      title: "Truly Unlimited Internet With Speed Up–To 1000 Mbps !",
      image: broadbandImage,
    },
    {
      category: "VOICE",
      title: "Unlimited Local and STD Call...",
      image: telePhone,
    },
    {
      category: "CCTV",
      title: "Enterprise Business Solutions Internet Leased Line",
      image: cctv,
    },
  ];

  return (
    <div className="flex items-center justify-center w-full bg-[#04231F] flex-wrap h-full lg:h-[400px]  py-10 ">
      <div className="flex items-center justify-center px-2 md:px-6 lg:px-10 mx-auto max-w-7xl flex-col flex-wrap lg:mt-0 ">
        {/* Title */}
        <div className="flex w-full lg:h-12 justify-center mb-6   ">
          <h1 className="font-radio-canada font-normal text-[25px] lg:text-[30px] leading-[100%] text-center bg-linear-to-r from-[#7d2dff] via-[#5200FF] to-[#0073ff] bg-clip-text text-transparent">
            The Wide Range Futures
          </h1>
        </div>

        {/* Services */}
        <div className="w-full flex flex-col items-center justify-center gap-6 lg:flex-row lg:h-[244px] ">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-[300px] h-[220px] bg-[#222222] rounded-[20px] flex-col gap-4 "
            >
              <div className="flex flex-col w-[200px] h-[140px] items-center ">
                {service.image && (
                  <div className="flex justify-center w-[130px] h-[70px]">
                    <img
                      src={service.image}
                      alt={service.category}
                      className="w-[50px]"
                    />
                  </div>
                )}

                <div className="flex items-center justify-center w-[100px] h-[30px] ">
                  <h2 className="font-poppins font-medium text-[14px] leading-[100%] text-center tracking-[0.08em] text-white">
                    {service.category}
                  </h2>
                </div>

                <div className="flex items-baseline justify-center w-[200px] h-10 ">
                  <p className="font-poppins font-normal text-[12px] leading-5 text-[#9E9E9E] text-start tracking-[0em] whitespace-pre-line">
                    {service.title.replace(" !", "\n")}
                  </p>
                </div>
              </div>

              <button className="flex items-center justify-center w-[90px] h-8 rounded-xl bg-[#00AAB5] cursor-pointer hover:bg-[#008f99] transition-colors duration-300 ">
                <p className="font-poppins font-normal text-[11.74px] leading-[100%] text-center tracking-[0em] text-[#F1F1F1]">
                  Know More
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
