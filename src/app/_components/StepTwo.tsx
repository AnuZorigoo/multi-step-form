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
import { BackButton } from "./BackButton";
import { ChevronLeft } from "lucide-react";
import { useContext } from "react";
import { StepContext, Data } from "../page";

const formSchema = z
  .object({
    email: z
      .string()
      .min(2)
      .max(50)
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    phone: z
      .string()
      .length(8, "Утасны дугаар 8 оронтой байх ёстой")
      .regex(/^\d+$/, "Утасны дугаарт зөвхөн тоо оруулна уу"),
    password: z
      .string()
      .min(8)
      .max(20)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        "Тусгай тэмдэгт болон том жижиг үсэг оруулна уу",
      ),
    confirm: z.string().min(8).max(20),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export const StepTwo = () => {
  const { step, handleNextStep, data, setData, handlePrevStep } =
    useContext(StepContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: data.email,
      phone: data.phone,
      password: data.password,
      confirm: data.confirm,
    },
  });

  const router = useRouter();

  const onSubmit = (values: any) => {
    setData((prev) => ({
      ...prev,
      email: values.email,
      phone: values.phone,
      password: values.username,
      confirm: values.confirm,
    }));
    handleNextStep();
  };

  return (
    <Card className="w-[480px] mx-auto flex flex-col gap-6 p-10">
      <Header />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1">
                  <FormLabel>Email</FormLabel>
                  <span className="text-[#E14942]">*</span>
                </div>
                <FormControl>
                  <Input placeholder="Placeholder" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1">
                  <FormLabel>Phone number</FormLabel>
                  <span className="text-[#E14942]">*</span>
                </div>
                <FormControl>
                  <Input placeholder="Placeholder" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1">
                  <FormLabel>Password</FormLabel>
                  <span className="text-[#E14942]">*</span>
                </div>
                <FormControl>
                  <Input type="password" placeholder="Placeholder" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1">
                  <FormLabel>Confirm Password</FormLabel>
                  <span className="text-[#E14942]">*</span>
                </div>
                <FormControl>
                  <Input type="password" placeholder="Placeholder" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2 w-full">
            <BackButton onBack={handlePrevStep} />

            <ContinueButton step={step} />
          </div>
        </form>
      </Form>
    </Card>
  );
};
