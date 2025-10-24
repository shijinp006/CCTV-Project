import { SpreadTheView } from "./SpreadtheView";
import { BestQuality } from "./BestQuality";
import { TopTechTrend } from "./TopTechTrends";
import { NewFeature } from "./NewFeature";
import { ExploreProduct } from "./ExploreProduct";
import { EnhanceYour } from "./EnhanceYour";
import { OurServices } from "./OurServices";
export const Center = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-linear-to-b from-[#05221F] to-[#0A1E1F]">
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
           <div className="w-full">
            {" "}
            <ExploreProduct />
          </div>
          <div className="w-full">
            {" "}
            <EnhanceYour />
          </div>
            <div className="w-full">
            {" "}
            <OurServices />
          </div>
        </div>
      </div>
    </>
  );
};
