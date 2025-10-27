import {
  EntrepriseService,
  ExpertiseService,
  Process,
  MobileAppDevelopment,
} from "../data/ServicesData";

export const ServicesSection = ({ service }:any) => {
  // Define all services
  const services = [
    { id: 1, title: "Entreprise Service", items: EntrepriseService },
    { id: 2, title: "Expertise Service", items: ExpertiseService },
    { id: 3, title: "Process", items: Process },
    { id: 4, title: "Mobile App Development", items: MobileAppDevelopment },
  ];

  // Find only the matching service based on prop
  const currentService = services.find((s) => s.title === service);

  // If no service selected, show nothing
  if (!currentService) return null;

  return (
    <div className="bg-[#151320] w-full text-white font-poppins px-6 py-6 border-t border-[#2F2C40]">
      <div className="grid grid-cols-1  gap-4 mt-4">
        {currentService.items.map((item) => (
          <div
            key={item.id}
            className="bg-[#1E1B2A] p-4 rounded-lg border border-[#2A2840] hover:border-[#00E0FF] transition-all"
          >
            <p className="text-base font-medium text-white">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
