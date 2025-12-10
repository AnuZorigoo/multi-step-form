"use client";

import { useState } from "react";
import { StepOne } from "./_components/StepOne";
import { StepTwo } from "./_components/StepTwo";
import { StepThree } from "./_components/StepThree";
import { Set } from "./_components/Set";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    console.log("kkkk");

    setStep((prev) => prev + 1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      {step === 1 && <StepOne step={step} next={handleNextStep} />}
      {step === 2 && <StepTwo step={step} next={handleNextStep} />}
      {step === 3 && <StepThree step={step} next={handleNextStep} />}
      {step === 4 && <Set step={step} next={handleNextStep} />}
    </div>
  );
}
