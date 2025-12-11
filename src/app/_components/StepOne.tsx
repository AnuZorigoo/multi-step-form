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
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";

type StepOneProps = {
  step: number;
  next: any;
};

const formSchema = z.object({
  firstname: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[A-Za-z]+$/, "Firstname can only contain letters"),
  lastname: z
    .string()
    .min(2)
    .max(20)
    .regex(/^[A-Za-z]+$/, "Lastname can only contain letters"),
  username: z
    .string()
    .min(2)
    .max(20)
    .regex(/^[A-Za-z]+$/, "Username can only contain letters"),
});

export function StepOne({ next, step }: StepOneProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
    },
  });

  const router = useRouter();

  const onSubmit = (data: any) => {
    next();
  };

  return (
    <Card className="w-[480px] mx-auto flex flex-col gap-6 p-10">
      <Header />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          {data.map((item, index) => (
            <FormField
              key={index}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-1">
                    <FormLabel>{item.label}</FormLabel>
                    <span className="text-[#E14942]">*</span>
                  </div>
                  <FormControl>
                    <Input placeholder={item.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <ContinueButton step={step} />
        </form>
      </Form>
    </Card>
  );
}

export const data = [
  { label: "First name", placeholder: "Placeholder", name: "firstname" },
  { label: "Last name", placeholder: "Placeholder", name: "lastname" },
  { label: "Username", placeholder: "Placeholder", name: "username" },
];
