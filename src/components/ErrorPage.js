import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import Button from "./Inputs/Button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-brand_secondary min-h-[100vh] flex items-center justify-center">
      <div className="max-w-[800px] w-[90%] text-center">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="mb-[2rem]"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-brand_primary/10 border-2 border-brand_primary/20 mb-6">
            <span className="text-[40px] font-albra_sans_b text-brand_primary">
              404
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="font-albra_sans_b text-[48px] md:text-[56px] lg:text-[64px] leading-[56px] md:leading-[64px] lg:leading-[72px] text-white mb-6"
        >
          This page got lost in the syllabus.
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-white/80 font-aileron_r text-lg md:text-xl max-w-[600px] mx-auto mb-8 leading-relaxed"
        >
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to learning with Edswot.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            name={"Back to homepage"}
            theme={"primary"}
            className={"text-brand_secondary px-8 py-3 text-base"}
            onClick={() => navigate("/")}
            arrowIcon={true}
          />
          <Button
            name={"Contact support"}
            theme={"white"}
            className={"text-brand_secondary px-8 py-3 text-base"}
            onClick={() => {
              window.location.href = "mailto:hello@edswot.com";
            }}
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-white/60 font-aileron_r text-sm">
            Need help? Check out our{" "}
            <button
              onClick={() => navigate("/#faq")}
              className="text-brand_primary hover:text-brand_primary/80 underline transition-colors"
            >
              FAQs
            </button>{" "}
            or{" "}
            <button
              onClick={() => navigate("/#courses")}
              className="text-brand_primary hover:text-brand_primary/80 underline transition-colors"
            >
              explore our courses
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;
