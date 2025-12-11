"use client";

import { useState } from "react";
import { StepOne } from "./_components/StepOne";
import { StepTwo } from "./_components/StepTwo";
import { StepThree } from "./_components/StepThree";
import { Set } from "./_components/Set";
import { AnimatePresence, motion } from "motion/react";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    console.log("kkkk");

    setStep((prev) => prev + 1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.25 }}
        >
          {step === 1 && <StepOne step={step} next={handleNextStep} />}
          {step === 2 && <StepTwo step={step} next={handleNextStep} />}
          {step === 3 && <StepThree step={step} next={handleNextStep} />}
          {step === 4 && <Set step={step} next={handleNextStep} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
