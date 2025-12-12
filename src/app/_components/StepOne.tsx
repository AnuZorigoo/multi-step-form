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
import { Data, StepContext } from "../page";
import { Dispatch, SetStateAction, useContext } from "react";

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

export const StepOne = () => {
  const { step, handleNextStep, data, setData } = useContext(StepContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
    },
  });

  const router = useRouter();

  const onSubmit = (values: any) => {
    setData((prev) => ({
      ...prev,
      firstname: values.firstname,
      lastname: values.lastname,
      username: values.username,
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
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1">
                  <FormLabel>First name</FormLabel>
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
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1">
                  <FormLabel>Last name</FormLabel>
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1">
                  <FormLabel>Username</FormLabel>
                  <span className="text-[#E14942]">*</span>
                </div>
                <FormControl>
                  <Input placeholder="Placeholder" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <ContinueButton step={step} />
        </form>
      </Form>
    </Card>
  );
};
