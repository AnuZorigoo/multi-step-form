"use client";

import { Input } from "@/components/ui/input";

export const TextField = () => {
  return (
    <div className="grid gap-2">
      <p className="font-semibold text-[14px]">{props.name}</p>
      <Input id="email" type="email" placeholder="m@example.com" required />
    </div>
  );
};
