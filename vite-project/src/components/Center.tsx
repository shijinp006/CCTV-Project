import { SpreadTheView } from "./SpreadtheView";
import { BestQuality } from "./BestQuality";
import { TopTechTrend } from "./TopTechTrends";
import { NewFeature } from "./NewFeature";
export const Center = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center  w-full min-h-screen bg-[#04231F] ">
        <div className="w-full">
          {" "}
          <SpreadTheView />
        </div>
        <div className="w-full">
          {" "}
          <BestQuality />
        </div>
        <div className="w-full">
          {" "}
          <TopTechTrend />
              <div className="w-full">
          {" "}
          <NewFeature />
        </div>
        </div>
      </div>
    </>
  );
};
