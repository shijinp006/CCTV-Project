import { SpreadTheView } from "./SpreadtheView";
import { BestQuality } from "./BestQuality";
import { TopTechTrend } from "./TopTechTrends";
import { NewFeature } from "./NewFeature";
import { ExploreProduct } from "./ExploreProduct";
import { EnhanceYour } from "./EnhanceYour";
import { OurServices } from "./OurServices";
import { motion } from "framer-motion";

export const Center = () => {
  const sectionVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-6  bg-linear-to-b from-[#04231F] via-[#120E23].via-[#05221F] to-[#151320]">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <SpreadTheView />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <BestQuality />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <TopTechTrend />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <NewFeature />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <ExploreProduct />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <EnhanceYour />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <OurServices />
        </motion.div>
      </div>
    </>
  );
};
