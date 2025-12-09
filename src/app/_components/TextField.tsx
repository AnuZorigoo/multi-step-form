"use client";

import { Input } from "@/components/ui/input";

export const TextField = (props: any) => {
  return (
    <div className="grid gap-2">
      <div className="flex gap-1">
        <p className="font-semibold text-[14px]">{props.name}</p>
        <p className="text-[#E14942]">*</p>
      </div>
      <Input id="email" type={props.type} placeholder="Placeholder" required />
    </div>
  );
};
