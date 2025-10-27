import broadbandImage from "../assets/broadband.svg";
import telePhone from "../assets/telephone.svg";
import cctv from "../assets/cctv.svg";
import { motion } from "framer-motion";

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

  // Animation variants
  const containerVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="flex items-center justify-center w-full bg-[#04231F] flex-wrap h-full lg:h-[400px] py-10 lg:py-0 "
    >
      <div className="flex items-center justify-center px-4 md:px-6 lg:px-10 w-full mx-auto max-w-7xl flex-col flex-wrap lg:mt-0 ">
        {/* Title */}
        <motion.div
          variants={cardVariants}
          className="flex w-full lg:h-12 justify-center items-end mb-6 "
        >
          <h1 className="font-radio-canada font-normal text-[25px] lg:text-[28px] leading-[100%] text-center bg-linear-to-r from-[#7d2dff] via-[#5200FF] to-[#0073ff] bg-clip-text text-transparent">
            The Wide Range Futures
          </h1>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={containerVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 lg:gap-0 lg:h-[244px]  rounded-xl p-4"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex items-center justify-center w-85 h-[220px] bg-[#222222] rounded-2xl flex-col gap-4"
            >
              <div className="flex flex-col w-[200px] h-[140px] items-center">
                {service.image && (
                  <div className="flex justify-center w-[130px] h-[70px]">
                    <img
                      src={service.image}
                      alt={service.category}
                      className="w-[50px]"
                    />
                  </div>
                )}

                <div className="flex items-center justify-center w-[100px] h-[30px]">
                  <h2 className="font-poppins font-medium text-[14px] leading-[100%] text-center tracking-[0.08em] text-white">
                    {service.category}
                  </h2>
                </div>

                <div className="flex items-baseline justify-center w-[200px] h-10">
                  <p className="font-poppins font-normal text-[12px] leading-5 text-[#9E9E9E] text-start tracking-[0em] whitespace-pre-line">
                    {service.title.replace(" !", "\n")}
                  </p>
                </div>
              </div>

              <button className="flex items-center justify-center w-[90px] h-8 rounded-xl bg-[#00AAB5] cursor-pointer hover:bg-[#008f99] transition-colors duration-300">
                <p className="font-poppins font-normal text-[11.74px] leading-[100%] text-center tracking-[0em] text-[#F1F1F1]">
                  Know More
                </p>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
