"use client";

import { useState } from "react";
import { CardSection } from "./_components/CardSection";
import { StepTwo } from "./_components/StepTwo";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      {step === 1 && <CardSection step={step} next={handleNextStep} />}
      {step === 2 && <StepTwo step={step} next={handleNextStep} />}
    </div>
  );
}
