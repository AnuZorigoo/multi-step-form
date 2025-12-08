"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const ContinueButton = () => {
  return (
    <Button type="submit" className="w-full">
      Continue 1/3 <ChevronRight />
    </Button>
  );
};
