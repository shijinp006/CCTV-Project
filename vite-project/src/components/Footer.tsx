export const Footer = () => {
  const footerLinks = [
    {
      title: "About us",
      links: [
        "About WebTech",
        "Our Team",
        "Mission & Values",
        "Careers",
        "Blogs",
      ],
    },
    {
      title: "Services",
      links: [
        "Software Development",
        "IT Consulting",
        "Web Design",
        "Digital Transformation",
        "Project Management",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Industry Solutions",
        "Custom Solutions",
        "Case Studies",
        "Client Success",
        "Testimonials",
      ],
    },
    {
      title: "Contact us",
      links: ["Get in Touch", "Support", "Sales", "Locations", "Contact Form"],
    },
  ];

  return (
    <>
      <footer className="flex lg:items-center justify-center w-full min-h-screen lg:min-h-[437px] flex-wrap relative bg-linear-to-b from-[#151320] to-[#120E23] ">
        <div className="flex flex-col items-center lg:justify-center w-full px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex  justify-between flex-col w-full lg:w-[860px] h-[200px] ">
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full h-[200px] ">
              {footerLinks.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full lg:w-[190px] h-full gap-3 "
                >
                  {/* Title */}
                  <div className="flex items-center  w-20 h-[30px] ">
                    <h2 className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0%] text-white">
                      {section.title}
                    </h2>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col w-[140px] h-[159px]  gap-2">
                    {section.links.map((link, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between w-[130px] h-[19px] "
                      >
                        <p className="font-raleway font-normal text-[12px] leading-[100%] tracking-[0%] text-[#9C9C9C]">
                          {link}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div
              className=" hidden lg:block w-full lg:w-[860px] h-0 opacity-100 "
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF) 1",
              }}
            />
          </div>
          <div className=" flex items-center justify-center w-full  lg:w-[860px] max-h-[92px] absolute bottom-8">
            <div className="flex items-center justify-center w-[850px] h-5">
              <p className="font-poppins font-normal text-[10px] lg:text-[12px] leading-5 tracking-[0px] text-center text-white">
                Copyright © 2025-26 Sacrosys Technologies | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
