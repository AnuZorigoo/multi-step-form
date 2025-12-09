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

type StepTwoProps = {
  step: number;
};

const formSchema = z.object({
  email: z.string().min(2).max(50),
  phone: z.number().min(8).max(8),
  password: z.string().min(8).max(20),
  confirm: z.string().min(8).max(20),
});

export function StepTwo({ step, next }: StepTwoProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: 0,
      password: "",
      confirm: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("FORM DATA:", data);
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
  { label: "Email", placeholder: "Placeholder", name: "email" },
  { label: "Phone number", placeholder: "Placeholder", name: "phone" },
  { label: "Password", placeholder: "Placeholder", name: "password" },
  {
    label: " Confirm Password",
    placeholder: "Placeholder",
    name: " confirm",
  },
];
