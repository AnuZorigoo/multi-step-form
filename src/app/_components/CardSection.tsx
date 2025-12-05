import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ContinueButton } from "./ContinueButton";
import { TextField } from "./TextField";

export function CardSection() {
  return (
    <Card className="w-[480px] max-w-sm">
      <CardHeader>
        <img
          src="/48cbcd1fb0c85cb83db9b8c1218a4675117f8e3f.png"
          className="w-[60px] h-[60px]"
        ></img>
        <CardTitle className="text-[#202124] text-[26px] font-semibold">
          Join Us! 😎
        </CardTitle>
        <CardDescription className="text-[#8E8E8E] text-[18px]">
          Please provide all current information accurately.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <TextField />
            <div className="grid gap-2">
              <div className="flex items-center"></div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex gap-2">
        <ContinueButton />
      </CardFooter>
    </Card>
  );
}

<div className="flex flex-col w-[480px] h-[655px] bg-white rounded justify-center p-8 content-between">
  <div className="flex flex-col gap-7 w-[416px] h-[385px]">
    <div className="flex flex-col gap-2 w-[416px] h-[129px]">
      <img
        src="/48cbcd1fb0c85cb83db9b8c1218a4675117f8e3f.png"
        className="w-[60px] h-[60px]"
      ></img>
      <p className="text-[#202124] text-[26px] font-semibold">Join Us! 😎</p>
      <p className="text-[#8E8E8E] text-[18px]">
        Please provide all current information accurately.
      </p>
    </div>
    <div className="w-[416px] h-[228px] flex flex-col gap-3">
      <div className="flex flex-col gap-2 h-[68px]">
        <p>First name *</p>
      </div>
    </div>
  </div>
</div>;
