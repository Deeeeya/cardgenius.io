import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-6 justify-center text-center items-center mt-20">
      <h1 className="text-7xl font-semibold">Prompt. Generate. Learn</h1>
      <p className="text-lg max-w-[600px] text-center">
        Transform Complex Study Materials into Intelligent, Personalized
        Flashcards with AI-Powered precision and Time-Saving Efficiency
      </p>
      <div className="flex gap-2 justify-center items-center">
        <Link href={"https://github.com/deeeeya"} target="_blank">
          <Image
            src={"/Github (1).png"}
            alt="github-logo"
            width={50}
            height={50}
            priority
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/dheya-abyan-309255263/"}
          target="_blank"
        >
          <Image
            src={"/Linkedin.png"}
            alt="linkedin-logo"
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
