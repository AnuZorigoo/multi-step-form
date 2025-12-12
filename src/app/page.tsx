"use client";

import { Dispatch, SetStateAction, useState, createContext } from "react";
import { StepOne } from "./_components/StepOne";
import { StepTwo } from "./_components/StepTwo";
import { StepThree } from "./_components/StepThree";
import { Set } from "./_components/Set";
import { AnimatePresence, motion } from "motion/react";

type StepContextType = {
  step: number;
  handlePrevStep: () => void;
  handleNextStep: () => void;
  data: Data;
  setData: Dispatch<SetStateAction<Data>>;
  prev: number;
};

export const StepContext = createContext<StepContextType>(
  {} as StepContextType
);

export type Data = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirm: string;
  birthday: Date | null;
  image: File | null;
};

export default function Home() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState<Data>({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
    birthday: null,
    image: null,
  });

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleNextStep = (value = 1) => {
    setStep((prev) => prev + value);
  };

  return (
    <StepContext.Provider
      value={{ step, handlePrevStep, handleNextStep, data, setData }}
    >
      <div className="flex min-h-screen items-center justify-center font-sans">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.25 }}
          >
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}
            {step === 4 && <Set />}
          </motion.div>
        </AnimatePresence>
      </div>
    </StepContext.Provider>
  );
}
