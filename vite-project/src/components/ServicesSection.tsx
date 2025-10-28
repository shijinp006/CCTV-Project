import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  EntrepriseService,
  ExpertiseService,
  Process,
  MobileAppDevelopment,
} from "../data/ServicesData";

export const ServicesSection = ({ service }: any) => {
  const [current, setCurrent] = useState(0);

  // Define all services
  const services = [
    { id: 1, title: "Entreprise Service", items: EntrepriseService },
    { id: 2, title: "Expertise Service", items: ExpertiseService },
    { id: 3, title: "Process", items: Process },
    { id: 4, title: "Mobile App Development", items: MobileAppDevelopment },
  ];

  // Find the selected service
  const currentService = services.find((s) => s.title === service);
  if (!currentService) return null;

  const { items }: any = currentService;

  // Auto-scroll for mobile
  useEffect(() => {
    if (!items?.length) return;
    const interval = setInterval(() => {
      if (window.innerWidth < 1024) {
        setCurrent((prev) => (prev + 1) % items.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [items]);

  // ✅ Helper to clean Vite cache URLs like ?t=12345

  return (
    <div className="flex flex-col gap-6 w-full px-4 lg:px-10 mb-4">
      {/* Description */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
        <div className="hidden lg:block w-px h-14 bg-[#9C9C9C] opacity-100 my-2"></div>
        <p className="font-raleway font-normal text-[14px] sm:text-[16px] leading-6 text-[#9C9C9C] max-w-4xl">
          Lorem ipsum dolor sit amet consectetur. Eu amet posuere consequat
          donec suspendisse lorem enim. Elit viverra nisl non nisl eleifend.
          Cursus erat mattis fames et mollis risus at.
        </p>
      </div>

      {/* Service Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-4 mt-4">
        {/* 🌐 Mobile View (Animated Slider) */}
        <div className="block lg:hidden relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative flex items-center justify-center h-[200px] w-full rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${items[current].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ background: "rgba(0,0,0,0.55)" }}
              />

              {/* Text */}
              <div className="relative z-10 flex items-center justify-center w-full">
                <h2 className="font-raleway text-[16px] text-center text-white drop-shadow-md">
                  {items[current].title}
                </h2>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-3 space-x-2">
            {items.map((_: any, index: any) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                  current === index ? "bg-white scale-110" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 💻 Desktop Grid */}
        {items.map((item: any, index: any) => (
          <div
            key={index}
            className="hidden lg:flex relative items-center justify-center h-[180px] lg:h-[200px] w-[260px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.55)" }}
            />

            <div className="relative z-10 flex items-center justify-center w-full">
              <h2 className="font-raleway text-[15px] text-center text-white drop-shadow-md">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
