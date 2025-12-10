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
import { Button } from "@/components/ui/button";
import { useState } from "react";

type StepThreeProps = {
  step: number;
  next: any;
};

const formSchema = z.object({
  birthday: z.coerce
    .date()
    .max(new Date(), {
      message: "Date of birth cannot be in the future.",
    })
    .min(new Date("1900-01-01"), {
      message: "Date of birth cannot be before 1900.",
    }),
  image: z.instanceof(File, { message: "Image cannot be blank" }),
});

export function StepThree({ next, step }: StepThreeProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birthday: new Date(),
    },
  });
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log("FORM DATA:", data);
    next();
  };
  const [preview, setPreview] = useState<string | null>(null);

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
            name="birthday"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1">
                  <FormLabel>Date of birth</FormLabel>
                  <span className="text-[#E14942]">*</span>
                </div>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    // onChange={(e) => field.onChange(new Date(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1">
                  <FormLabel>Profile image</FormLabel>
                  <span className="text-[#E14942]">*</span>
                </div>
                <FormControl>
                  <Button
                    type="button"
                    variant={"secondary"}
                    className="w-[416px] h-[180px] bg-[#7F7F800D] flex flex-col justify-center items-center gap-2 relative p-0"
                  >
                    {preview ? (
                      <img
                        src={preview}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <>
                        <img src="/Upload Icon Container.png" />
                        <p className="text-black">Add image</p>
                      </>
                    )}
                    <Input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 opacity-0 cursor-pointer w-[416px] h-[180px]"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          field.onChange(file);
                          setPreview(URL.createObjectURL(file));
                        }
                      }}
                    />
                    {preview && (
                      <div
                        type="button"
                        onClick={() => {
                          setPreview(null);
                          field.onChange(null);
                        }}
                        className="absolute top-2 right-2 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg hover:bg-black"
                      >
                        ✕
                      </div>
                    )}
                  </Button>
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
}
