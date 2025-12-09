"use client";

"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

type ContinueButtonProps = {
  step: number;
};

export const ContinueButton = ({ step }: ContinueButtonProps) => {
  const pathname = usePathname();

  if (pathname.includes("step-2")) step = 2;
  if (pathname.includes("step-3")) step = 3;

  return (
    <Button type="submit" className="w-full">
      Continue {step}/3 <ChevronRight />
    </Button>
  );
};
