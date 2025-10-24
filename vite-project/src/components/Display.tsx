import { LandingPage } from "./LandingPage";
import { WideRange } from "./Widerange";
import { Center } from "./Center";

export const Display = () => {
  return (
    <>
      <div className="flex w-full min-h-screen flex-col">
        <div className="w-full">
          <LandingPage />
        </div>
        <div className="w-full">
          <WideRange />
        </div>
        <div className="w-full">
          <Center />
        </div>
      

      </div>
    </>
  );
};
