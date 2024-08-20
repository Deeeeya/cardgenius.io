import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Features = () => {
  return (
    <div className="flex gap-12">
      <Card className="mb-4 w-full rounded-[75px] border-none shadow-none w-[1000px]">
        <CardContent className="p-0">
          <div className="relative w-full h-0 rounded-[75px] pb-[100%] border">
            <Image
              src="/left-box.png"
              layout="fill"
              className="rounded-[75px] border"
              alt="Left box"
            />
          </div>
        </CardContent>
      </Card>
      <Card className="mt-20 w-full rounded-[75px] border-none shadow-none w-[1400px] h-[340px] overflow-hidden">
        <CardContent className="p-0">
          <div className="relative w-full h-0 rounded-[75px] pb-[100%] border">
            <Image
              src="/middle-box.png"
              position="absolute"
              layout="fill"
              className="rounded-[75px] border"
              alt="Middle box"
            />
          </div>
        </CardContent>
      </Card>
      <Card className="mb-4 w-full  border-none shadow-none w-[1000px]">
        <CardContent className="p-0">
          <div className="relative w-full h-0 rounded-[75px] pb-[100%]  ">
            <Image
              src="/right-box.png"
              layout="fill"
              className="rounded-[75px] border"
              alt="Right box"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Features;
