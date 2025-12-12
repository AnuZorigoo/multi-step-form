"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export const BackButton = ({ onBack }: { onBack: () => void }) => {
  const handleGoBack = () => {
    if (onBack) return onBack();
    window.history.back();
  };

  return (
    <Button
      onClick={handleGoBack}
      variant="secondary"
      className="w-32 h-11 flex-1"
    >
      <ChevronLeft /> Back
    </Button>
  );
};
