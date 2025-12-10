"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ContinueButton } from "./ContinueButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Header } from "./Header";
import z, { date } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type SetProps = {
  step: number;
  next: any;
};

export function Set({ next, step }: SetProps) {
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log("FORM DATA:", data);
    next();
  };

  return (
    <Card className="w-[480px] mx-auto flex flex-col gap-6 p-10">
      <div className="flex flex-col gap-2 w-[416px]">
        <img
          src="/48cbcd1fb0c85cb83db9b8c1218a4675117f8e3f.png"
          className="w-[60px] h-[60px]"
        />
        <p className="text-[#202124] text-[26px] font-semibold">
          You're All Set 🔥
        </p>
        <p className="text-[#8E8E8E] text-[18px]">
          We have received your submission. Thank you!
        </p>
      </div>
    </Card>
  );
}
