"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { SignedOut, SignedIn, useClerk } from "@clerk/nextjs";

const AppNavbar = () => {
  const { signOut } = useClerk();

  return (
    <div className="flex justify-between items-center p-6 max-w-[1200px] w-full">
      <Image priority src={"/logo.png"} width={170} height={120} />

      <div className="flex gap-6">
        <Link href={"/"} asChild>
          <Button variant="ghost" className="text-gray-600" size="sm">
            Home
          </Button>
        </Link>
        <Link href={"#pricing"} smooth={true} duration={500} asChild>
          <Button variant="ghost" className="text-gray-600" size="sm">
            Pricing
          </Button>
        </Link>
        <Link href={"#features"} smooth={true} duration={500} asChild>
          <Button variant="ghost" className="text-gray-600" size="sm">
            Product
          </Button>
        </Link>
      </div>

      <SignedOut>
        <div className="flex gap-4">
          <Link href={"/sign-in"} asChild>
            <Button>Login</Button>
          </Link>
          <Link href={"/sign-up"} asChild>
            <Button variant="secondary">Sign Up</Button>
          </Link>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex gap-4">
          <Link href={"/generate"} asChild>
            <Button variant="secondary">Generate</Button>
          </Link>

          <Button variant="destructive" onClick={() => signOut()}>
            Log Out
          </Button>
        </div>
      </SignedIn>
    </div>
  );
};

export default AppNavbar;
